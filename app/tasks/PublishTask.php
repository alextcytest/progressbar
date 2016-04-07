<?php

class PublishTask extends \Phalcon\Cli\Task
{
    public function mainAction()
    {
        $redis = new Redis();
        $redis->pconnect('127.0.0.1', 6379);
        //var_dump($redis);exit;

        for ($i=1; $i<=5; $i++) {

            $redis->publish('progress-chanel', $i);

            echo 'Publish message: '. $i . "\n";

            sleep(mt_rand(1,5));
        }

        $redis->close();
    }
}