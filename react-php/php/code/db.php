<?php

    class Database{
        
        private $host='localhost';
        private $db_user='root';
        private $db_password='';
        private $db_name='react_php';
        private $con;


        public function Connection(){

            $this->con=null;

            try{

                $this->con=new PDO('mysql:host='.$this->host.';dbname='.$this->db_name.'',
                $this->db_user,$this->db_password);

                $this->con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

            }catch(PDOException $e){
                echo 'Connection Failed ! '.$e->getMessage();
            }

            return $this->con;
        }


    }


?>