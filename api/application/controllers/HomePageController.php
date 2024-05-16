<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class HomePageController extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->database();
    }

    public function getHomePageData() {
        $this->db->select('*');
        $query = $this->db->get('homepage');
        $posts = $query->result();
        header('Content-Type: application/json');
        echo json_encode($posts);
    }
}
