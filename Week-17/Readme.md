## Question 1: Normalization
Consider the following unnormalized table for a bookstore database:


| Book ID | Title                 | Author          | Genre       | Publisher         | ISBN           | Price  |
|---------|-----------------------|-----------------|-------------|-------------------|---------------|--------|
| 101     | To Kill a Mockingbird | Harper Lee      | Fiction     | HarperCollins     | 978-0061120084 | 10.99  |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction   | Scribner          | 978-0743273565 | 12.50  |
| 103     | Principles of Physics | Jearl Walker   | Science     | Wiley             | 978-0321976444 | 50.00  |
 
Normalize the table to 1NF, 2NF, and 3NF, explaining the steps you took at each normalization level.



1NF-
In 1st Normal Form, each column must have atomic (indivisible) values, and each row must be unique. The given table already meets this requirement.

2NF-
2nd Normal Form requires that each non-key attribute (column) must be fully functionally dependent on the entire primary key. In the given table, the primary key seems to be the "Book ID" column. 
In this case, all non-key attributes (Title, Author, Genre, Publisher, ISBN, Price) seem to be fully functionally dependent on the entire primary key (Book ID). Therefore, the table is already in 2nd Normal Form.

3NF-
3rd Normal Form requires that no non-key attribute is transitively dependent on the primary key.Analyzing the table to identify any transitive dependencies:

"Publisher" depends on "Book ID" (Directly dependent on primary key).
"ISBN" depends on "Book ID" (Directly dependent on primary key).
"Price" depends on "Book ID" (Directly dependent on primary key).
Since all non-key attributes are directly dependent on the primary key, the table is already in 3rd Normal Form.

In summary, the given table is already in 1st, 2nd, and 3rd Normal Forms. The attributes are appropriately structured, with no partial or transitive dependencies. Therefore, no further normalization is required for this specific table.

## [Bonus]Question 2: Database Normalization Practice

Apply Normalization on the below table and return the list of tables after 1NF, 2NF, 3NF, 4NF, 5NF( if applicable)

### Table: Employee Information

| Employee ID | Employee Name | Department   | Project ID | Project Name | Start Date | End Date   | Salary  |
|-------------|---------------|--------------|------------|--------------|------------|------------|---------|
| 101         | John Doe      | HR           | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000    |
| 101         | John Doe      | HR           | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200    |
| 102         | Jane Smith    | Marketing    | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500    |
| 103         | Mike Johnson  | IT           | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000    |
| 103         | Mike Johnson  | IT           | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200    |
| 104         | Sarah Brown   | HR           | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800    |
| 105         | Robert Lee    | Finance      | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200    |
| 106         | Lisa Wang     | IT           | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800    |


### Step-by-Step Guidelines:

### Step 1: First Normal Form (1NF)

Ensure each column contains atomic values.
Eliminate repeating groups.
Result: The table should not contain any repeating groups.
### Step 2: Second Normal Form (2NF)

Identify the primary key(s).
Eliminate partial dependencies.
Result: The table should be in 2NF with separate tables for each entity and its attributes.

It seems that the primary key here could be a combination of "Employee ID" and "Project ID." 
Employee ID -> Employee Name, Department, Salary
Project ID -> Project Name, Start Date, End Date
Non-key attributes are fully dependent on the primary key. Therefore, the table is already in 2nd Normal Form.

### Step 3: Third Normal Form (3NF)

Remove transitive dependencies.
Result: The table should be in 3NF with separate tables for each relationship.

The table does not have any transitive dependencies, as all attributes are directly dependent on the primary key.
As a result, the table is already in 3rd Normal Form.

### Step 4: Fourth Normal Form (4NF)

Remove multi-valued dependencies.
Result: The table should be in 4NF with separate tables for independent multi-valued attributes.
There are no multi-valued dependencies in the table, so it is already in 4th Normal Form.

### Step 5: Fifth Normal Form (5NF) [If Applicable]

Apply 5NF if the database has complex multi-valued relationships.
In some cases, 5NF may not be necessary, as it applies to certain complex databases. If 5NF is applicable, it usually deals with cases of lossless-join decompositions.

The table does not exhibit any complex many-to-many relationships that would require 5th Normal Form.



Note: The normalization process may involve additional steps and considerations depending on the complexity of the original table and the specific database design. Always aim to minimize redundancy, improve data integrity, and optimize the structure of the database.

## Question 3: What are the primary keys and foreign keys in a relational database, and how do they establish relationships between tables?

PRIMARY KEY:-
A primary key is used to ensure that data in the specific column is unique. 
Only one primary key is allowed in a table.
A column cannot have NULL values.

FOREIGN KEY:-
column which provides a link between data in two tables.
It refers to the field in a table which is the primary key of another table.
Here, more than one foreign key is allowed in a table.
It can also contain NULL values.

## Question 4: Explain the ACID properties in the context of database transactions.

The ACID properties collectively provide a framework for ensuring the reliability, consistency, and integrity of transactions in a database management system. These properties are essential to guarantee that databases can maintain data accuracy, even in the presence of hardware failures, software errors, and concurrent access by multiple users or applications.

Atomicity(A):-
Atomicity ensures that a transaction is treated as a single, indivisible unit of work. It either completes in its entirety or leaves no trace if it fails midway. If a transaction consists of multiple steps, either all of these steps are executed, or none of them are. If any part of a transaction fails, the entire transaction is rolled back, and the database state is left unchanged. This property prevents partial updates that could lead to inconsistent data.

Consistency(C):- 
Consistency ensures that a transaction brings the database from one consistent state to another consistent state. In other words, the database should adhere to certain predefined rules or constraints before and after the transaction. If a transaction violates these rules, the changes made by the transaction are rolled back, and the database remains in a consistent state. Consistency guarantees that the database remains valid and accurate throughout the transaction process.

Isolation(I):- 
Isolation guarantees that the concurrent execution of multiple transactions does not lead to unexpected or incorrect results. Transactions are executed as if they were executed one after the other, even though they might be executed concurrently. This prevents interference or interactions between transactions that could result in data inconsistencies. Isolation levels determine the degree of separation between transactions, ranging from low isolation (allowing more concurrency but potentially leading to anomalies) to high isolation (ensuring strict separation but potentially reducing concurrency).

Durability(D):-
Durability ensures that once a transaction is successfully committed, its changes become permanent and will survive any subsequent system failures or crashes. Committed transactions and their changes are stored safely and will not be lost even in the face of power outages, hardware failures, or other catastrophic events. This property guarantees that once data is written to the database, it remains there, and the changes are not lost.


## Question 5: Describe the concept of indexing in a database. How does indexing improve query performance?

In a database, indexing is a fundamental concept that involves creating a data structure to efficiently retrieve and access records within a table. It is analogous to creating an index in a book, where you can quickly find specific information without scanning through every page. In the context of databases, indexing significantly improves query performance by reducing the amount of data that needs to be scanned or processed to retrieve desired information.

Here's how indexing works and how it improves query performance:

**1. Index Creation:**
When you create an index on a database table, the database management system (DBMS) creates a separate data structure that organizes a subset of the data in a way that facilitates faster data retrieval. This data structure typically contains a copy of the indexed column(s) along with references to the actual records in the table.

**2. Faster Data Retrieval:**
When you query the database using a column that has an index, the DBMS doesn't have to scan the entire table to find the relevant data. Instead, it can use the index to quickly locate the records that match the query criteria. This is particularly beneficial for large tables where scanning the entire table would be time-consuming and resource-intensive.

**3. Reduced I/O Operations:**
Indexing reduces the number of input/output (I/O) operations required to fulfill a query. Without indexes, the DBMS might need to perform a full table scan, reading every row from disk, even if only a subset of those rows is actually needed for the query. With indexes, the DBMS can often avoid reading unnecessary data from disk, which leads to faster query execution.

**4. Query Optimization:**
DBMSs use query optimizers to decide how to execute a query efficiently. These optimizers take into account the available indexes and choose the best execution plan. If an index exists on columns relevant to the query's conditions, the optimizer can choose an index-based access path, which typically results in faster query performance.

**5. Types of Indexes:**
Different types of indexes cater to various use cases. Common types include:
- **B-Tree Index:** A balanced tree structure that efficiently supports range queries and exact matches.
- **Hash Index:** Uses a hash function to directly locate records, suitable for exact matches but not ranges.
- **Bitmap Index:** Uses a bitmap to indicate the presence or absence of values, efficient for low cardinality columns.
- **Full-Text Index:** Specifically designed for text search queries, allowing more complex text-based searches.

**6. Trade-offs:**
While indexing offers substantial performance benefits, it's not without trade-offs. Indexes consume additional disk space and require maintenance during data updates (inserts, updates, deletes), as the index must remain synchronized with the underlying table. Over-indexing can lead to slower insert/update operations and increased storage requirements.


## Question 6: Explain the concept of concurrency control, deadlocks in a multi-user database environment.
**Concurrency Control:**
Concurrency control is a critical aspect of managing multi-user database environments, where multiple users or applications are simultaneously accessing and modifying the same database. The goal of concurrency control is to ensure that transactions (sets of database operations) from different users can execute concurrently without causing data inconsistencies or other problems. In essence, it's about maintaining the integrity of the database while allowing for efficient and parallel execution of transactions.

Concurrency control mechanisms handle issues such as data integrity violations, conflicts, and deadlocks to ensure that transactions are executed in a way that maintains the consistency and correctness of the database.

**Deadlocks:**
A deadlock is a situation in which two or more transactions are unable to proceed because each is waiting for a resource that the other transaction holds. This leads to a standstill where none of the transactions can make progress, effectively causing the system to "freeze." Deadlocks are undesirable and can seriously impact the performance and availability of a database system.

Consider a simple example involving two transactions, A and B, each needing two resources (e.g., database locks) to complete. If transaction A acquires resource 1 and waits for resource 2, while transaction B acquires resource 2 and waits for resource 1, a deadlock occurs. Neither transaction can proceed without the other releasing its resource.

**Detection and Resolution of Deadlocks:**
Database systems implement strategies to detect and resolve deadlocks:

1. **Timeouts:** The database system may set a timeout for transactions waiting on a resource. If the timeout expires, the transaction is aborted, and its resources are released. This approach prevents transactions from waiting indefinitely.

2. **Resource Preemption:** In some cases, the system may forcibly preempt a resource from one transaction and allocate it to another to break the deadlock. However, this strategy must be used carefully to avoid causing more disruption.

3. **Wait-for Graph:** A wait-for graph is a graphical representation of transactions and resources, showing the dependencies causing the deadlock. The database system can periodically analyze this graph to detect deadlocks.

4. **Deadlock Prevention:** This involves setting up rules and protocols to ensure that the conditions necessary for a deadlock never occur. However, prevention strategies can increase complexity and reduce system throughput.

**Concurrency Control Mechanisms:**
To prevent data inconsistencies and deadlocks, databases use various concurrency control mechanisms:

1. **Locking:** Transactions acquire locks on resources before accessing them. Locks prevent other transactions from modifying the same data simultaneously. Locks can be shared (read locks) or exclusive (write locks).

2. **Isolation Levels:** Databases offer different isolation levels, such as Read Uncommitted, Read Committed, Repeatable Read, and Serializable. These levels define the extent to which a transaction's changes are visible to other transactions.

3. **Two-Phase Locking:** This protocol requires transactions to follow a specific pattern of acquiring locks (growing phase) and releasing locks (shrinking phase). This helps in preventing conflicts and reducing the chances of deadlocks.

4. **Timestamp Ordering:** Transactions are assigned timestamps, and the order in which transactions are executed is determined by their timestamps. This helps avoid conflicts and provides a clear sequence of execution.

In conclusion, concurrency control is crucial to maintaining the integrity and performance of multi-user database environments. Deadlocks are a particular concern in such systems, as they can lead to system failures and performance degradation. Database systems employ various techniques to detect, prevent, and resolve deadlocks while allowing transactions to proceed concurrently in a controlled and consistent manner.


## Question 7: Read about Database sharding and explain couple of real time examples where, why, how it this concept is used.

**Database Sharding:**
Database sharding is a technique used to horizontally partition a large database into smaller, more manageable pieces called "shards." Each shard is essentially a self-contained database that contains a subset of the data. The primary goal of sharding is to distribute the data and the workload across multiple servers or nodes, thereby improving performance, scalability, and availability in large-scale applications.

In a sharded database architecture, each shard can be hosted on a separate server or cluster, allowing for parallel processing of queries and transactions. Sharding is commonly employed in situations where a single, centralized database would not be able to handle the high volume of data and concurrent user requests.

**Real-Time Examples:**

1. **Social Media Platforms:**
    - **Example:** Consider a social media platform like Facebook or Twitter. These platforms handle an enormous amount of data, including user profiles, posts, comments, likes, and more.
    - **Why Sharding:** To ensure quick response times and handle the massive user base and activity, these platforms utilize sharding. Each user's data (profile, posts, interactions) can be stored in a separate shard. This allows the platform to distribute the load across multiple servers, improving performance and scalability.
    - **How:** User data is partitioned based on a certain attribute (e.g., user ID, geographical location, etc.). Each shard is managed by a separate database server or cluster. Queries involving a specific user or their data only need to access the relevant shard, reducing the overall load on the system.

2. **E-commerce Platforms:**
    - **Example:** Consider an e-commerce platform like Amazon. The platform has a vast product catalog, user profiles, order history, and real-time inventory management.
    - **Why Sharding:** With a growing number of products, users, and transactions, a centralized database could become a bottleneck. Sharding enables efficient data distribution and improved performance.
    - **How:** Data could be sharded based on product categories, regions, or other relevant attributes. Each shard would manage a portion of the product catalog and user information. This approach allows the platform to handle a high volume of searches, orders, and updates concurrently.

3. **Gaming Industry:**
    - **Example:** Online multiplayer games experience intense data loads due to real-time interactions, leaderboards, in-game transactions, and more.
    - **Why Sharding:** Sharding is crucial to maintain low-latency gameplay and seamless interactions. Distributing player data and game state across shards ensures that the game servers can handle a large number of players simultaneously.
    - **How:** Shards could be created based on factors like geographic regions or game modes. Players in the same shard interact within a shared game world, and the system can scale by adding more shards as the player base grows.

In these examples, database sharding is used to address challenges related to data volume, user concurrency, and performance. Sharding allows applications to distribute data and workload across multiple servers, ensuring that the system remains responsive, scalable, and available even in the face of high demand. However, implementing and managing a sharded database requires careful planning and consideration of factors such as data distribution strategies, load balancing, fault tolerance, and data consistency across shards.