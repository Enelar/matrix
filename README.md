Crontab commands:

* * * * * curl -S http://wikiroutes/api/utils/mediator/ProcessStageA > /dev/null
* * * * * php /var/www/wikiroutes/stageB.php > /dev/null
* * * * * curl -S http://wikiroutes/api/utils/mediator/ProcessStageC > /dev/null
