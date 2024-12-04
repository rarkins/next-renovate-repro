# Renovate minimal reproduction

Hi, we want to customized the renovate PR titles which is done by customizing
the commit message which is used for the PR title. Since commitMessage is deprecated
we want to move to commitMessagePrefix, commitMessageTopic, commitMessageSuffix etc.
However, even though we have set those values accordingly, they are not used for
the PR title; instead the group_name value of the packageMatcher is used.

Link to the discussion [here](https://github.com/renovatebot/renovate/discussions/32872#discussioncomment-11449796).
There is one open PR which uses the group_name in the title, not what is
configured in the config. Also, if you check the commit message it seems to
include the right values, but they are all in lower case.
