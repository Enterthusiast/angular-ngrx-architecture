# Controller logic

You should not have to create controllers.
Think about creating services instead.

The only controllers left here should be the logic that must be run before Angular 2 has been fully bootstrapped.
For example: the routes logic that are loaded by the ngModules and Routers.
