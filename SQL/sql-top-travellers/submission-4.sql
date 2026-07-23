-- Write your query below
SELECT 
seller.seller_name
FROM seller 
WHERE seller.seller_id NOT IN (
        SELECT orders.seller_id FROM orders WHERE orders.sale_date >= '2020-01-01' AND orders.sale_date <= '2020-12-31'
    )
ORDER BY seller.seller_name ASC    

