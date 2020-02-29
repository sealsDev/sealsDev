<?php 
	function clear(){
		global $db;
		foreach ($_POST as $key => $value) {
			$_POST[$key] = mysqli_real_escape_string($db, $value);
		}
	}

	function save_data(){
		global $db;
		clear();
		extract($_POST);
		$query = "INSERT INTO `users_data` (`name`, `email`, `phone`, `select_lang`) VALUES ('{$name}', '{$email}', '{$phone}', '{$select_lang}')";
		mysqli_query($db, $query);
	}
 ?>