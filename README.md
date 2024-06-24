# KTNext3Ru

# 💖 우리팀 워크 플로우 (브랜치 전략)

1. 첫 프로젝트 포크 & 로컬 클론 / 이후 프로젝트 sync fork & pull
2. 로컬 작업 브랜치 생성
3. 각자 작업
4. 작업 후 포크한 레포에 브랜치 푸시 (브랜치 퍼블리싱)
5. 원본 레포에 PR & Merge
6. Merge 후 원격 & 로컬 브랜치 삭제

## 1. 첫 프로젝트 포크 & 로컬 클론 / 이후 프로젝트 sync fork & pull

### 1-1. 첫 프로젝트 포크 & 로컬 클론

`git clone`<br>
프론트, 백엔드 각각 디펜던시 설치<br>
`npm i`<br>
~~**루트 디렉토리**에서 깃 시작~~<br>
~~`git init`~~<br> -> clone하면 .git까지 클론해서 안해도됨
작업 브랜치 생성 이어서 진행 -> 2번<br>

### 1-2. 이후 프로젝트 sync fork & fetch

원본 레포와 sync fork 후,<br>
로컬 **main** 브랜치에서 포크한 레포의 **main** 브랜치 **fetch**<br>
`git fetch origin main`<br>

## 2. 로컬 작업 브랜치 생성

로컬 작업 브랜치 생성 & 체크아웃<br>
`git checkout -b feature-<작업페이지 이름>`
작업 브랜치 네이밍 컨벤션 준수<br>
feature-<작업페이지 이름><br>
feature-<작업페이지 이름>-<기능이름 또는 본인이름> (팀원간 페이지 작업이 겹칠 경우)<br>
이때 '작업페이지 이름'은 라우트 기준<br>
![alt text](image-10.png)<br>
좌측하단 로컬 브랜치 체크아웃이 올바르게 되어있나 확인<br>
![alt text](image-11.png)<br>
명령어로 현재 로컬 브랜치 목록 확인 - 올바르게 생성 & 체크아웃(\*)이된 것을 확인 가능<br>
`git branch`<br>
![alt text](image-12.png)<br>

## 3. 각자 작업

## 4. 작업 후 포크한 레포에 브랜치 푸시 (브랜치 퍼블리싱)

푸시 전 반드시 sync fork 후,<br>
로컬 main, 작업 브랜치에서 포크한 레포의 **main** 브랜치 **pull**하여 **다시 한번** 최신상태로 업데이트할 것<br>
`git pull origin feature`<br>
변경사항 모두 저장 후 스테이징<br>
이때 최대한 논리적 단위로 나눠서 스테이징/커밋 - GUI로 하는 것을 권장...<br>
![alt text](image-13.png)<br>
커밋 메시지 작성<br>
아래 메시지창에 바로 작성하는 것이 아니라 (CLI의 `git commit -m "<커밋메시지>"`에 해당),<br>
![alt text](image-23.png)<br>
반드시 **commit** 클릭하여 vi 편집기 내에서처럼 메시지 입력할 것 (CLI의 `git commit`에 해당)<br>
![alt text](image-30.png)<br>
**커밋 컨벤션** 준수하여 작성<br>
템플릿의 예시 커밋에서 바로 수정 및 주석처리 제거<br>
공백 한줄도 반드시 주석처리 제거할 것<br>
커밋 메시지 작성 -> 저장 -> **체크 버튼** 클릭<br>
![alt text](image-24.png)<br>
로컬 작업 브랜치 -> 포크한 원격 레포로 푸시 (_브랜치 퍼블리싱_)<br>
[1] GUI<br>
![alt text](image-16.png)<br>
![alt text](image-17.png)<br>
(맥북의 경우 비번 입력)<br>
![alt text](image-18.png)<br>
포크한 원격 레포에 들어가보면 로컬 브랜치가 성공적으로 퍼블싱된 것을 확인 가능<br>
![alt text](image-19.png)<br>
[2] CLI<br>
`git push origin feature-<작업페이지 이름>`

## 5. 포크한 레포 PR & Merge

포크한 레포에서 먼저 충돌나는지 확인
sync fork한 후,
**포크한 레포**의 main <- 작업 브랜치 pr & merge
충돌 없으면 원본 레포로 pr
‼️ 반드시 원본 레포의 **feature**로 pr 요청할 것<br>

## 6. 원본 레포 PR & Merge

**팀장**이 **순차적으로** pr 생성 & merge 진행<br>
**‼️ 충돌 발생시 반드시 팀원과 같이 수정할 것**<br>
[1] feature <- feature-<작업페이지 이름><br>
[2] dev <- feature<br>
[3] main <- dev<br>

## 6. Merge 후 원격 & 로컬 브랜치 삭제

[1] Merge 완료한 원격 작업브랜치 삭제<br>
**‼️ main 브랜치 merge까지 확실히 끝났을 경우**에만 삭제 진행할 것<br>
![alt text](image-28.png)<br>
![alt text](image-29.png)<br>
원격 브랜치 삭제가 로컬에도 업데이트되었는지 확인<br>
`git branch -r`<br>
안되었을 경우 아래 명령어 실행<br>
`git remote prune origin`<br>
다시 확인<br>
`git branch -r`<br>

[2] 로컬 작업브랜치 삭제<br>
다른 브랜치(main)로 checkout 후<br>
`git checkout main`<br>
작업했던 로컬 브랜치 삭제<br>
`git branch -D <삭제할 브랜치명>`<br>

[3] 새로운 작업 시작 (1-2번)<br>
