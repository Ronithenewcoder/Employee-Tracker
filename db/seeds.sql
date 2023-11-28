/* roles */
INSERT INTO roles (title, salary) VALUES
  ('HR Manager', 60000.00),
  ('Software Engineer', 800000.00),
  ('Sales Representative', 70000.00);

/* employees */
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
   ('John', 'Doe', 2, NULL),
  ('Jane', 'Smith', 3, 1),
  ('Sher', 'Johnson', 2, 1),
  ('Allyssa', 'Cohan', 3, 1);