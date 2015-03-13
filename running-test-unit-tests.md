---
layout: page
title: "Running Test Unit Tests"
description: ""
category: tip
---
{% include JB/setup %}

To run the entire test suite:

```
bundle exec rake test
```

To run a single test file:

```
ruby -Itest test/unit/user_test.rb
```

To run a single test within a file:

```
ruby -Itest test/unit/user_test.rb -n test_create_new_password
```

You may also run the individual sections of the test suite:

```
bundle exec rake test:units
bundle exec rake test:functionals
bundle exec rake test:integration
```

For more info on Test::Unit: http://guides.rubyonrails.org/testing.html
