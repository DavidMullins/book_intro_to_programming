/*
It will go into an infinite loop because the condition statement is setting counter equal to 1
instead of doing a comparison by use of '==='. So counter starts the loop equal to one, then logs
increments to 2. The if part of the while loop never triggers then due to 2 not being greater than
2. When the loop goes to loop again due to a break never being triggered, the counter gets set to
1 again and the loop continues forever.
*/
