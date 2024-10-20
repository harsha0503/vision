<?php



$admin_sql = "SELECT name, company_name,admin_name FROM users WHERE role = 'admin'";
$admin_result = $conn->query($admin_sql);

$user_sql = "SELECT user_name, email FROM users";
$user_result = $conn->query($user_sql);



$user_data = [];
$admin_data = [];

if ($user_result->num_rows > 0) {
    while ($row = $user_result->fetch_assoc()) {
        $user_data[] = ['admin_name' => $row['user_name'], 'company_name' => $row['company_name']];
    }
}

if ($admin_result->num_rows > 0) {
    while ($row = $admin_result->fetch_assoc()) {
        $admin_data[] = ['user_name' => $row['admin_name'], 'company_name' => $row['company_name']];
    }
}

$max_rows = max(count($user_data), count($admin_data));

?>
