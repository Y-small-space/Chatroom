/* 
1.SQL的SELECT 语句
    1.浯法
    SELECT语句 用于从表中查询数据。执行的结果被存储在一个结果表中（称为结果集）。
    语法格式如下： 
        -- 这是注释
        --从FROM 指定的【表中】，查询出【所有的】数据。 * 表示【所有列】

        SELECT * FROM 表名称
        
        --从FROM 指定的【表中】，查询出指定 列名称（字段） 的数据。
        SELECT 列名称 FROM 表名称
    
    2. SELECT * 示例
    我们希望从 users 表中选取所有的列，可以使用符号 * 取代列的名称，示例如下：
        SELECT * FROM 表名称

    3. SELECT 列名称 示例
如需获取名为“username”和"password”的列的内容（从名为“users” 的数据库表） ，请使用下面的 SELECT 语句：
        SELECT username, password FROM users
*/
/*
2.SQL 的 INSERT INTO 句
    1.浯法
    INSERT INTO 语句用于向数据表中插入新的数据行，
    语法格式如下：
    语法解读：向指定的表中，插入如下几列数据，列的值面过 values 一一指定
    列和值要一一对应，多个列和多个值之间，使用英文的逗号分隔
    INSERT INTO table_name （列1,列2.,..) VALUES (値1,値2....)
*/
/* 
3.SQL 的 UPDATE 语句
    1.浯法
    Update 语句用于修改表中的数据。语法格式如下：
    UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
    用 UPDATE 指定要更新哪个表中的数据
    用 SET 指定列对应的新値
    用 WHERE 指定更新的条件
    UPDATE users SET password='admin123', Status= WHERE id=1
*/
