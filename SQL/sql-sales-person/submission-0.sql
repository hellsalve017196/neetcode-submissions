-- Write your query below
SELECT 
sales_person.name 
FROM 
sales_person 
WHERE 
sales_person.sales_id NOT IN 
    (
        SELECT orders.sales_id FROM orders WHERE orders.com_id IN 
            (
                SELECT company.com_id FROM company WHERE company.name = 'CRIMSON'
            )
    )