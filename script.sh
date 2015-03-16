#!/bin/sh
echo 'iniciando script...'
touch README2.txt
git add -A
git commit -m 'auto shell script'
git push origin master
echo '.......fin del autoscript de la hostia'
