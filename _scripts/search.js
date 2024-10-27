/*
  filters elements on page based on url or search box.
  syntax: term1 term2 "full phrase 1" "full phrase 2" "tag: tag 1"
  match if: all terms AND at least one phrase AND all selected tags (default)
  or if `logic=or` in URL, match any selected tags
*/
{
  const elementSelector = ".card, .citation, .post-excerpt, .project-excerpt";
  const searchBoxSelector = ".search-box";
  const infoBoxSelector = ".search-info";
  const tagSelector = ".tag";

  const selectedTags = new Set();

  // Detect "or" logic from URL
  const urlParams = new URLSearchParams(window.location.search);
  const useOrLogic = urlParams.get("logic") === "or";

  const splitQuery = (query) => {
    const parts = query.match(/"[^"]*"|\S+/g) || [];
    const terms = [];
    const phrases = [];
    const tags = [];

    for (let part of parts) {
      part = part.replaceAll('"', "").trim();
      if (part.startsWith("tag:")) tags.push(normalizeTag(part.replace(/tag:\s*/, "")));
      else if (part.includes(" ")) phrases.push(part.toLowerCase());
      else terms.push(part.toLowerCase());
    }

    return { terms, phrases, tags: [...new Set(tags)] };
  };

  window.normalizeTag = (tag) =>
    tag.trim().toLowerCase().replaceAll(/-|\s+/g, " ");

  const getAttr = (element, attr) =>
    [element, ...element.querySelectorAll(`[data-${attr}]`)]
      .map((element) => element.dataset[attr])
      .join(" ");

  const elementMatches = (element, { terms, phrases, tags }) => {
    const tagElements = [...element.querySelectorAll(".tag")];
    const hasText = (string) =>
      (
        element.innerText +
        getAttr(element, "tooltip") +
        getAttr(element, "search")
      )
        .toLowerCase()
        .includes(string);
    const hasTag = (string) =>
      tagElements.some((tag) => normalizeTag(tag.innerText) === string);

    // Use "or" logic if `logic=or` is specified in URL, otherwise use "and" logic
    if (useOrLogic) {
      return (
        (terms.every(hasText) || !terms.length) &&
        (phrases.some(hasText) || !phrases.length) &&
        (tags.some(hasTag) || !tags.length) // Match any one of the tags
      );
    } else {
      return (
        (terms.every(hasText) || !terms.length) &&
        (phrases.some(hasText) || !phrases.length) &&
        (tags.every(hasTag) || !tags.length) // Match all tags by default
      );
    }
  };

  const filterElements = (parts) => {
    let elements = document.querySelectorAll(elementSelector);
    let x = 0;
    let n = elements.length;

    for (const element of elements) {
      if (elementMatches(element, parts)) {
        element.style.display = "";
        x++;
      } else element.style.display = "none";
    }

    return [x, n];
  };

  const highlightMatches = async ({ terms, phrases }) => {
    if (typeof Mark === "undefined") return;
    new Mark(document.body).unmark();
    let counter = 0;
    const filter = () => counter++ < 100;

    new Mark(elementSelector)
      .mark(terms, { separateWordSearch: true, filter })
      .mark(phrases, { separateWordSearch: false, filter });
  };

  const updateSearchBox = (query = "") => {
    const boxes = document.querySelectorAll(searchBoxSelector);

    for (const box of boxes) {
      const input = box.querySelector("input");
      const button = box.querySelector("button");
      const icon = box.querySelector("button i");
      input.value = query;
      icon.className = input.value.length
        ? "icon fa-solid fa-xmark"
        : "icon fa-solid fa-magnifying-glass";
      button.disabled = input.value.length ? false : true;
    }
  };

  const updateInfoBox = (query, x, n) => {
    const boxes = document.querySelectorAll(infoBoxSelector);

    if (query.trim()) {
      boxes.forEach((info) => (info.style.display = ""));
      let info = "";
      info += `Showing ${x.toLocaleString()} of ${n.toLocaleString()} results<br>`;
      info += "<a href='./'>Clear search</a>";
      boxes.forEach((el) => (el.innerHTML = info));
    } else {
      boxes.forEach((info) => (info.style.display = "none"));
    }
  };

  document.querySelectorAll(tagSelector).forEach((tag) => {
    tag.addEventListener("click", () => {
      const tagName = normalizeTag(tag.innerText);

      if (selectedTags.has(tagName)) {
        selectedTags.delete(tagName);
        tag.removeAttribute("data-active");
      } else {
        selectedTags.add(tagName);
        tag.setAttribute("data-active", "");
      }

      const tagSearchQuery = [...selectedTags].map((t) => `"tag: ${t}"`).join(" ");
      runSearch(tagSearchQuery);
      updateUrl(tagSearchQuery);
    });
  });

  const updateTags = (query) => {
    const { tags } = splitQuery(query);
    document.querySelectorAll(tagSelector).forEach((tag) => {
      if (tags.includes(normalizeTag(tag.innerText)))
        tag.setAttribute("data-active", "");
      else tag.removeAttribute("data-active");
    });
  };

  function toggleTag(tag) {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search") || "";

    if (searchQuery.includes(`tag: ${tag}`)) {
      const newQuery = searchQuery.replace(`tag: ${tag}`, "").trim();
      urlParams.set("search", newQuery);
    } else {
      const newQuery = `${searchQuery} "tag: ${tag}"`.trim();
      urlParams.set("search", newQuery);
    }

    window.history.replaceState(null, null, `?${urlParams.toString()}`);
    runSearch(urlParams.get("search"));
  }


  const runSearch = (query = "") => {
    const parts = splitQuery(query);
    const [x, n] = filterElements(parts);
    updateSearchBox(query);
    updateInfoBox(query, x, n);
    updateTags(query);
    highlightMatches(parts);
  };

  const updateUrl = (query = "") => {
    const url = new URL(window.location);
    let params = new URLSearchParams(url.search);
    params.set("search", query);
    url.search = params.toString();
    window.history.replaceState(null, null, url);
  };

  const searchFromUrl = () => {
    const query =
      new URLSearchParams(window.location.search).get("search") || "";
    runSearch(query);
  };

  const debounce = (callback, delay = 250) => {
    let timeout;
    return (...args) => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => callback(...args), delay);
    };
  };

  const debouncedRunSearch = debounce(runSearch, 1000);
  window.onSearchInput = (target) => {
    debouncedRunSearch(target.value);
    updateUrl(target.value);
  };

  window.onSearchClear = () => {
    runSearch();
    updateUrl();
  };

  window.addEventListener("load", searchFromUrl);
  window.addEventListener("tagsfetched", searchFromUrl);
}
