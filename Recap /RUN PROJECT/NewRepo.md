## CRÉER UN REPOS :
echo "# todo-list" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:Kwonsongji/todo-list.git
git push -u origin main

## git push origin master --force : forcer à pusher sur la branch MASTER

## git log : liste les commits

##  git reset --hard HEAD^ : X le dernier commit 

## git remote rm NomDeLaRemote : delete la remote

## git remote -v  


cf:
https://github.com/O-clock-Alumni/fiches-recap/blob/6e336ba18815ec32ef12e5ec3c2442707b386988/ldc/git-multi-remote.md