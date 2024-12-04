# Renovate minimal reproduction

Hi, we want to customized the renovate PR titles which is done by customizing
the commit message which is used for the PR title. Since commitMessage is deprecated
we want to move to commitMessagePrefix, commitMessageTopic, commitMessageSuffix etc.
However, even though we have set those values accordingly, they are not used for
the PR title; instead the group_name value of the packageMatcher is used.

There is one open PR which uses the group_name in the title, not what is
configured in the config. Also, if you check the commit message it seems to
include the right values, but they are all in lower case.

## Current behavior

PR title does not match what is specified in `commitMessageSuffix`, `commitMessageTopic` and
instead the PR title is equal to the `group_name` of the `packageMatcher`.
It does take the value from `commitMessagePrefix` though.

## Expected behavior

PR title should match what is configured in `commitMessagePrefix`, `commitMessageSuffix`, `commitMessageTopic` etc.

## Link to the Renovate issue or Discussion

Link to discussion: https://github.com/renovatebot/renovate/discussions/32872#discussioncomment-11449796
