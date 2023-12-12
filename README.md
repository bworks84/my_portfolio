# Portfolio Project

Welcome to my portfolio site! I'm building out a website to highlight what I've been working on and begin utilizing AWS more!

## Table of Contents

- [Overview](#overview)
- [About Me](#about-me)
- [Projects](#projects)
- [TaskList](#task-list)
- [Tools](#tools)
- [Attributes](#attributes)
- [Notes](#notes)

## Overview

I am building out a portfolio site to display my projects in a little bit more catchy way, including a new resume page for the Cloud Resume Challenge, possibly a blog, and more front-end options using React.

I mainly wanted to start building projects as a way to show what I can do and break up the monotony of studying...

I will host this site on AWS and document my progress/challenges utilizing the blog

I also want to integrate Github's CoPilot on this project to begin learning more about it and how I can use it in future projects

## About Me

I'm a current student interested in AWS, Python, Linux, and cybersecurity.

## Projects

- [Project 1](https://github.com/bworks84/cloud-resume-challenge) - First Cloud Resume Project

- [Project 2] (https://github.com/bworks84/terraform-proj) - Build out a Dev environment hosted on AWS EC2 instance

## Task List

[x] Push initial stages to new repo. Make README file

[x] Change icon for tab

[x] Create border or outline for skills section

[x] Build out Skills section to link to a blog or area that documents this project

[x] Build out React functionality for badges (minimize and remove them as screen gets smaller)

[x] Update Resume.

[x] Hook up Contact Me button on navbar

[x] Hook up email functionality for contact form

[x] Create projects section with interactive containers that link to github repos

[x] Clean up badge bar presentation

[x] Expand on About me Section to make it independent section, maybe add another pic

[x] Build out blog application.

[x] Finish front-end design of website.

[x] Updated with basic routing...might come back to add scrolling for home page

[x] Host on AWS S3, use AWS CLI to sync changes via package.json script

[x] Updated footer to only appear on home page

[ ] Update styling to account for different screen sizes and test

[ ] Install AWS amplify for tools/features to develop full-stack app

[ ] Create new domain.

# Tools

Installed AWS Amplify for authentication and extra tools for this project.

- Steps:

1.  In root folder of react project, run `npm install -g @aws-amplify/cli`
2.  Initialize Amplify in project by running `amplify init`

# Ideas

- Interactive road map with highlights or notes about my journey since 2020

# Attributes

# Notes

- consider adding delete script to package.json to minimize S3 size - // aws s3 sync --delete build/ s3://YOUR_BUCKET_NAME
