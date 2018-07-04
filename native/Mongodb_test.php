<?php
include "./Mongodb_native.php";
$mongodb = new Mongodb();


// INSERT
$data_insert = array(
	'title' => 'Judul ke-6',
	'content' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
	'date' => '04/07/2018'
);
//$test_insert = $mongodb->insert("my_table", $data_insert);
//echo "<pre>";
//var_dump($test_insert);
//echo "</pre>";

// INSERT BATCH
$data_insert = array(
	array(
		'title' => 'Judul ke-7',
		'content' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		'date' => '04/07/2018'
	),
	array(
		'title' => 'Judul ke-8',
		'content' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
		'date' => '04/07/2018'
	)
);
//$test_batch_insert = $mongodb->batch_insert("my_table", $data_insert);
//echo "<pre>";
//var_dump($test_batch_insert);
//echo "</pre>";


// SELECTING DATA WITH CONDITIONS
$data_select = array(
	"id", "title", "content"
);
$data_deselect = array(
	"_id"
);
$data_where = array(
	"date" => "04/07/2018"
);

// 1 to ASC || -1 to DESC
$data_order = array(
	"id" => -1
);

$test_select = $mongodb->select($data_select, $data_deselect)->where($data_where)->limit(10)->order_by($data_order)->get("my_table");
//echo "<pre>";
//var_dump($test_select);
//echo "</pre>";

