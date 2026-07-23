-- Write your query below
SELECT customers.name 
FROM customers
WHERE customers.id NOT IN (SELECT DISTINCT orders.customer_id FROM orders)