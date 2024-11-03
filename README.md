
# GeoHAI's Website

Visit **[geohai.org](http://geohai.org)** 🚀

_This lab website is heavily modified version and built from the wonderful [Lab Website Template](https://greene-lab.gitbook.io/lab-website-template-docs)_

Update: All images are now hosted on Cloudinary to avoid taking up on unnecessary space on Github. Send your pictures (member or project or blog posts) to Morteza. 

## Setup Local Development Environment

For GeeoHAI members who want to edit or add to the website.

For Mac, you won’t be able to use the system Ruby. To install your own version of Ruby without sudo priveleges, here’s a way to do it with homebrew and rbenv for ruby version management.

1. install homebrew per <https://superuser.com/questions/619498/can-i-install-homebrew-without-sudo-privileges>,
2. install rbenv and ruby per <https://snyk.io/blog/how-to-install-ruby-in-mac-os/>
3. update your path to point to the new ruby environment by running\`export PATH="$HOME/.rbenv/shims:$PATH"\` or wherever you install rbenv
4. install jekyll per <https://jekyllrb.com/docs/installation/macos/>

For Windows, try the Ruby installation (we don't currently recommmend a specific link)

## Cloning & Running Locally

1. Download local copy
    1. Go to <https://github.com/geohai/geohai-website> and clone to your local
    2. Delete your Gemfile.lock file
    3. Run “bundle install”
    4. Run “jekyll serve –livereload” (there are two “-” there)
    5. If you navigate to <http://127.0.0.1:4000>, you should see a local version of the website. The hot reload flag is on so when you make changes, you should see the changes reflected immediately

## Local Development Workflow
1. Create your own branch with `git checkout -b your-branch-name`
2. Push your changes to github `git push -u origin your-branch-name
3. Create a pull request describing your changes, show you've tested the changes
4. Merge your PR into `main` branch
5. Ensure it has deployed

## Adding Yourself as a Team Member to the Website
1. In the “\_members” folder, add a file “\[first name\]-\[last name\].md”  E.g. “jen-macdonald.md”
2. Find a picture of yourself and name it “\[first name\]-\[last name\].jpg”. Then add it to the “images/member-images” folder and make sure the “image” prop points to your image
3. Fill out the page. Use “jen-macdonald.md” a guide (you can copy the file and paste it in, and then modify)
4. For “role” fill out based on your title
    1. pi == Principal Investigator
    2. postdoc == Postdoctoral Researcher
    3. phd == PhD Student
    4. masters == Master’s Student
    5. undergrad == Undergraduate Student
    6. programmer == Programmer
    7. mascot == Mascot
5. Comment and uncomment/delete any areas that are/aren’t relevant to you
6. <https://greene-lab.gitbook.io/lab-website-template-docs/basics/team-members>

## Add Your Projects or Blog Posts to the Website
1. In the “\_projects”  folder, add a file “\[year\]-\[title\].md”. For blog posts, look for the formatting examples under “\_posts”
    1. E.g. “2023-graphs-intel-project.md”
2. Find a picture for your project”. Add it to the “images” folder inside “\_projects” and make sure the “image” prop points to your image, and also have a "thumbnail" for the project over view page.
3. Fill out the page. Use “2023-graphs-intel-project.md” a guide (you can copy the file and paste it in, and then modify)
4. Comment and uncomment/delete any areas that are/aren’t relevant to you
5. Note: If there is more than one author, in the “author” field list the authors in the order you want them to appear, separated by “,“ (no spaces). We want to include all lab members that have contributed to that project overall. 
6. For the thumbnail image of your project, please use an image with roughly a 4:3 aspect ratio.

