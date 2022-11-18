# MySQL 정리


## 개발환경 구축



* MySQL 윈도우 프로그램 설치: 설치 도중 authentication method를 선택하는 창이 나오면 legacy로 선택
* 환경변수 - 시스템변수 - Path에 MySQL Server\bin 폴더가 등록됐는지 확인하고 없으면 등록 
* 프로젝트 폴더에 MySQL 모듈(npm) 설치: npm install -save mysql
* vscode 터미널에서 mysql -uroot -p 입력해서 실행: 설치시 설정한 비밀번호 입력
* 데이터베이스 생성   
* 포트번호 조회: SHOW GLOBAL VARIABLES LIKE 'PORT';


## 7.4 데이터베이스 및 테이블 생성하기


### 7.4.1 데이터베이스 생성하기


```
/* 데이터베이스 표시 */
show databases;

/* 데이터베이스 생성 */
CREATE SCHEMA `데이터베이스 이름` DEFAULT CHARACTER SET utf8;
// utf8을 붙여서 한글을 사용할 수 있게 했다

/* 데이터베이스 고정 */
use `데이터베이스 이름`;

/* 데이터베이스의 모든 테이블 조회 */
show tables;

/* 데이터베이스의 모든 테이블의 정보 조회 */
show table status;
```



### 7.4.2 테이블 생성하기


```
/* 테이블 생성 */
CREATE TABLE `테이블 이름` (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    favorite INT NOT NULL DEFAULT 0, 
    PRIMARY KEY(id))
    DEFAULT CHARACTER SET = utf8
    ENGINE = InnoDB;

/* 테이블 정보 확인*/
DESC `테이블 이름`;

/* 컬럼 추가 */
alter table `테이블 이름` add `컬럼 이름` `타입 옵션`; 

/* 컬럼 삭제 */
alter table `테이블 이름` drop `컬럼 이름`;

/* 컬럼 이름 변경 및 타입 변경 */
alter table `테이블 이름` change `컬럼 이름` `변경할 컬럼 이름` `변경할 타입`;

/* 컬럼 타입 수정 */
alter table `테이블 이름` modify `컬럼 이름` `변경할 타입`;

/* 테이블 이름 수정 */
alter table `테이블 이름` rename `변경할 타입`;

/* 테이블 삭제 */
DROP TABLE `테이블 이름`;
```




* 테이블에 대한 옵션
    * COMMENT는 테이블에 대한 보충 설명을 메모하는 옵션이다
    * DEFAULT CHARACTER SET을 utf8로 설정해야 한글을 입력할 수 있다
    * ENGINE은 여러 가지가 있지만, MyISAM과 InnoDB가 주로 쓰인다
* 컬럼의 자료형
    * INT는 정수를 의미한다
    * VARCHAR는 고정 길이 자릿수이고, CHAR는 가변 길이 자릿수이다
    * TEXT는 긴 글을 저장할 때 한다. 수백 자 이내의 문자열은 보통 VARCHAR로 많이 처리하고, 그보다 길면 TEXT로 처리한다.
    * TINYINT는 -128부터 127까지의 정수를 저장할 때 사용한다. 1 또는 0만 저장한다면 불리언과 같은 역할을 할 수 있다.
    * DATETIME은 날짜와 시간에 대한 정보를 담고 있다. 날짜 정보만 담는 DATE와 시간 정보만 담는 TIME도 있다
* 컬럼의 자료형 뒤에 붙는 옵션
    * NULL과 NOT NULL은 빈칸을 허용할지 여부를 묻는 옵션이다
    * AUTO_INCREMENT는 자동으로 오름차순 번호를 매기는 옵션이다
    * UNSIGNED를 적용하면 음수는 무시되고 0~4294967295까지 저장할 수 있다. FLOAT과 DOUBLE에는 UN 적용이 불가능하다.
    * ZEROFILL은 빈 자리에 모두 0을 넣어서 자릿수를 고정시키는 옵션이다
    * DEFAULT는 데이터베이스 저장 시 해당 컬럼에 값이 없다면 자동으로 기본값을 넣는 옵션이다. now()는 현재 시각을 뜻한다.
    * PRIMARY KEY는 기본키에 해당하는 컬럼을 지정하는 설정이다
    * UNIQUE INDEX는 고유키에 해당하는 컬럼을 지정하는 설정이다


## 7.5 CRUD 작업하기


### 7.5.1 Create(생성)


```
/* 테이블에 행을 추가 */
INSERT INTO `테이블 이름` (id, name) VALUES (1, '이름');
```



### 7.5.2 Read(조회)


```
/* 테이블의 모든 데이터를 조회 */
SELECT * FROM `테이블 이름`;
```



```
/* 테이블의 특정 컬럼을 조회 */
SELECT 컬럼1, 컬럼2 FROM `테이블 이름`;
```



### 7.5.3 Update(수정)


```
/* users 테이블에서 id가 2인 로우(둘째줄)를 수정 */
UPDATE users SET comment = '바꿀 내용' WHERE id = 2; 
// and나 or로 여러 조건 동시 지정 가능
```



### 7.5.4 Delete(삭제)


```
/* users 테이블에서 id가 2인 로우(둘째줄)를 삭제 */
DELETE FROM users WHERE id = 2; 
// and나 or로 여러 조건 동시 지정 가능
```



### 참고사항



* 연산자
    * IN: 리턴되는 값 중에서 조건에 해당하는 값이 있으면 참이다.
    * ANY, SOME: 서브쿼리에 의해 리턴되는 각각의 값과 조건을 비교하여 하나 이상을 만족하면 참이다.
    * ALL: 값을 서브쿼리에 의해 리턴되는 모든 값과 조건값을 비교하여 모든 값을 만족해야만 참이다.
    * EXISTS: 메인 쿼리의 비교 조건이 서브쿼리의 결과 중에서 만족하는 값이 하나라도 존재하면 참이다.
* SELECT 관련 옵션
    * DISTINCT : 중복되는 행을 제거하는 옵션입니다.
    * * :  테이블의 모든 column을 출력 합니다.
    * alias : 해당 column에 대해서 다른 이름을 부여할 때 사용합니다.
    * table_name : 질의 대상 테이블명
    * WHERE : 조건을 만족하는 행들만 검색
    * condition : column, 표현식, 상수 및 비교 연산자
    * ORDER BY : 질의 결과 정렬을 위한 옵션 {ASC=오름차순(디폴트), DESC= 내림차순}
    * LIMIT: 결과 개수를 제한

- LOOP문
```sql
DELIMITER $$ -- 프로시저 생성 시작을 알림
DROP PROCEDURE IF EXISTS loop_test $$ -- 프로시저가 만들어져 있다면 삭제하고 다시 만듬
CREATE PROCEDURE loop_test(IN var INT) -- 파라미터 설정, IN/OUt, 변수이름 var, 타입 INT
BEGIN
    DECLARE nCnt INT DEFAULT 0; -- 변수선언
    DECLARE nTot INT DEFAULT 0; 
    loop_xxxx:LOOP -- LOOP 선언, 루프이름 주어짐
       IF (var <= nCnt) THEN -- IF 문 사용
          LEAVE loop_xxxx; -- loop 탈출 조건 (탈출 조건을 사용하기 위해서는 루프의 이름이 지정되어야 함.) 
       END IF;  
       SET nCnt = nCnt + 1; -- 변수 변경
       SET nTot = nTot + nCnt; 
    END LOOP;
 
    SELECT CONCAT(CONCAT(CONCAT('1 부터 ', var), ' 까지의 합은 '), nTot) AS total; -- 결과 값 출력
 
END $$
DELIMITER ;-- 프로시저 생성 종료를 알림

Call loo_test(10); -- 프로시저 실행
```

- WITH문
    - WITH문은 해당 요청이 실행되는 동안에만 유지된다
```sql
WITH temp_table AS (
SELECT * FROM kosdak_000250_d WHERE day='2022-01-28' union all
SELECT * FROM kosdak_003100_d WHERE day='2022-01-28' union all
SELECT * FROM kosdak_005990_d WHERE day='2022-01-28' )
SELECT  *  FROM  temp_table order by volume desc;
```
- 