# Renovate minimal reproduction

The repo contains two PRs one for minor npm upgrades and one for major npm
upgrades. The **minor** PR uses the old config option of `commitMessage` which
is deprecated. This is what we want the PR titles to look like.

The **major** PR is using the new config options of `commitMessage{Prefix,Topic,Extra,Suffix}`.
The title is wrong however; it seems to pull the name from the value of `group_name`.

## Current behavior

Major dependency PR title is: "[RENOVATE] Update frontend_major".

## Expected behavior

Major dependency PR title should be: "[RENOVATE] Update FE major dependencies".

## Link to the Renovate issue or Discussion

Link to discussion: https://github.com/renovatebot/renovate/discussions/32872#discussioncomment-11449796
