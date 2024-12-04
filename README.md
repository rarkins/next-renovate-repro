# Renovate minimal reproduction

The repo contains two PRs one for minor npm upgrades and one for major npm
upgrades. The **minor** PR uses the old config option of `commitMessage` which
is deprecated. This is what we want the PR titles to look like.

The **major** PR is using the new config options of `commitMessage{Prefix,Topic,Extra,Suffix}`.
The title is wrong however; it seems to pull the name from the value of `group_name`.

## Current behavior

PR title does not match what is specified in `commitMessageSuffix`, `commitMessageTopic` and
instead the PR title is equal to the `group_name` of the `packageMatcher`.
It does take the value from `commitMessagePrefix` though.

## Expected behavior

PR title should match what is configured in `commitMessagePrefix`, `commitMessageSuffix`, `commitMessageTopic` etc.

## Link to the Renovate issue or Discussion

Link to discussion: https://github.com/renovatebot/renovate/discussions/32872#discussioncomment-11449796
