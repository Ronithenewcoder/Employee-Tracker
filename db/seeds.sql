--roles
INSERT INTO roles (title, salary, department_id) VALUES
  ('HR Manager', 60000.00, 1),
  ('Software Engineer', 80000.00, 2),
  ('Sales Representative', 50000.00, 3);

--employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 2, NULL),
  ('Jane', 'Smith', 3, 1),
  ('Bob', 'Johnson', 2, 1),
  ('Alice', 'Williams', 3, 1);