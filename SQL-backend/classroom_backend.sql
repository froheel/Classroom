create database classroom1
use classroom1

create table Person
	(
	accountId int not null,
	dateofregister date check(dateofregister<=getdate()) not null,
	name varchar(30)not null,
	email varchar(40) unique not null,
	dob date check(dob<getdate())not null,
	gender char check(gender='M' or gender='F') not null,
	profilepicture varchar (50),
	bio varchar(100),
	[password] varchar(30) not null check(len([password])>=6), -- minimum 6 length

	primary key(accountId)
	);

	go
	Insert into Person(accountId,dateofregister,name,email,dob,gender,profilepicture,bio,[password])
	values(1,getdate(),'Feza Roheel','feza22@gmail.com',N'1999-07-30','F','Feza.jpg','Hello my name is fez','123$$@')
	Insert into Person(accountId,dateofregister,name,email,dob,gender,profilepicture,bio,[password])
	values(2,getdate(),'Muja','muj@gmail.com',N'1999-03-30','M','Muja.jpg','Hello my name is muja','imsocoovl')
	Insert into Person(accountId,dateofregister,name,email,dob,gender,profilepicture,bio,[password])
	values(3,getdate(),'Arshad','arshad1@gmail.com',N'1999-07-30','M','Arshad.jpg','Hello my name is arshad','mycaaaall')
	

	select *
	from Person


create table Class
	(
	classId int not null,
	classname varchar(30) not null,
	classcode varchar(10) check(len(classcode)>0) unique,
	meetlink varchar(50),
	invitelink varchar(50),

	primary key(classId)
	);

	go
	Insert into Class(classId,classname,classcode,meetlink,invitelink)
	values(1,'Programming',134509,'https://meet','https://join')
	Insert into Class(classId,classname,classcode,meetlink,invitelink)
	values(2,'AI',13422509,'https://meet','https://join')


	select * from [Class]

create table Enrolled
	(
	accountId int not null,
	classId int not null,
	[type] char check([type]='S' or [type]='T') not null, --- S for Student & T for Teacher

	primary key(accountId,classId),
	foreign key(accountId) references Person(accountId) on update cascade on delete cascade,
	foreign key(classId) references Class(classId) on update cascade on delete cascade,
	);

	go
	Insert into Enrolled(accountId,classId,[type])
	values(1,1,'T')
	Insert into Enrolled(accountId,classId,[type])
	values(2,2,'T')
	Insert into Enrolled(accountId,classId,[type])
	values(3,1,'S')
	Insert into Enrolled(accountId,classId,[type])
	values(2,1,'S')

	Select * from [Enrolled]


	create table Post
	(
	postId int not null,
	accountId int not null,
	classId int not null,
	created datetime default current_timestamp,
	content varchar(200),
	topic varchar(30),
	[type] char default 'N' check([type]='R' or [type]='A' or [type]='N'),

	primary key(postId),
	foreign key(accountId,classId) references Enrolled(accountId,classId) on update cascade on delete cascade,

	);
	go 
	Insert into Post(postId,accountId,classId,created,content,topic,[type])
	values(1,1,1,current_timestamp,'Hello students','Intro','R')
	Insert into Post(postId,accountId,classId,created,content,topic,[type])
	values(2,1,1,current_timestamp,'Assign1','assigns','A')

	select * from Post

	create table [Resource]
	(
	postId int not null,
	attachment varchar(50),

	primary key(postId),
	foreign key(postId) references Post(postId) on update cascade on delete cascade
	);

	go
	Insert into [Resource](postId,attachment)
	values(1,'Course outline')
	
	select * from [Resource]


create table Assignment
	(

	postId int not null,
	deadline datetime,
	marks int,
	attachment varchar(50),

	primary key(postId),
	foreign key(postId) references Post(postId) on update cascade on delete cascade,

	);

	insert into Assignment(postId,deadline,marks,attachment)
	values(2,current_timestamp, 100, 'Assign.pdf')

	select * from Assignment

	create table Comments
	(
	commentId int not null,
	postId int not null,
	accountId int not null,
	content varchar(50) not null,
	[time] datetime default current_timestamp,

	primary key(commentId),
	foreign key(postId) references Post(postId) on update cascade on delete cascade,
	foreign key(accountId) references Person(accountId), --on update cascade on delete cascade,
	);

	go
	insert into Comments(commentId,postId,accountId,content,[time])
	values(1,2,3,'Maam what are we supposed to do?',CURRENT_TIMESTAMP)

	select * from Comments

	create table Submission
	(
	
	accountId int not null,
	postId int not null,
	document varchar(200),
	submissiontime datetime not null,

	primary key(accountId,postId),
	foreign key(accountId) references Person(accountId),-- on update cascade on delete cascade,
	foreign key(postId) references Assignment(postId) on update cascade on delete cascade,


	);

	/*DROP table Submission*/

	go
	insert into Submission(accountId,postId,document,submissiontime)
	values(2,2,'mujaassign01',CURRENT_TIMESTAMP)

	select * from Submission

	create table Mark
	(
	postId int not null,
	studentId int not null,
	obtainedmarks int not null,
	returned char not null check(returned='Y' or returned ='N'),

	primary key(postId,studentId),
	foreign key(studentId) references Person(accountId),-- on update cascade on delete cascade,
	foreign key(postId) references Assignment(postId) on update cascade on delete cascade,
	);

	go
	insert into Mark(postId,studentId,obtainedmarks,returned)
	values(2,2,80,'Y')

	/*drop table Mark*/
	Select * from Mark

---Procedures
--- Procedure 1 : Insert Person
go
create procedure InsertPerson
@dateofregister date,
@name varchar(30),
@email varchar(40),
@dob date,
@gender char,
@profilepicture varchar (50),
@bio varchar(100),
@userpassword varchar(30),
@flag int OUTPUT --- 0: success , 1:@dob >=date, 2 :gender !=M and not equal to F , 3:len of pass <6 , 4:email not unique in db
as
begin
set @flag=0
declare @max int
select @max=1

	if( exists (select * from [Person]))
	begin
	select @max= max(accountId)+1
	from [Person]
	end

	if( @dob >= getdate())
	begin
	set @flag=1
	return 
	end

	if(@gender!='M' and @gender!='F')
	begin
	set @flag=2
	return
	end

	if(len(@userpassword)<6)
	begin
	set @flag=3
	return
	end

	if(exists( select * from [Person] where email=@email))
	begin
	set @flag=4
	return
	end

	insert into [Person](accountId, dateofregister, name, email, dob, gender, profilepicture, bio, [password])
	values(@max,getdate(),@name,@email,@dob,@gender,@profilepicture,@bio,@userpassword)

end



declare @success int

exec InsertPerson
@accountId = '4',
@dateofregister = '',
@name = 'Ather Fawaz',
@email ='ather@gmail.com',
@dob = N'2000-01-12',
@gender = 'M',
@profilepicture = 'ather.jpg',
@bio = 'my name is fawzu',
@userpassword = 'iaamfawaz',
@flag=@success OUTPUT 

select @success


select * from [Person]
--- Procedure 2: Insert Class
-- Each class name is unique


go
create procedure InsertClass
@classname varchar(30),
@classcode varchar(10),
@meetlink varchar(50),
@invitelink varchar(50),
@flag int OUTPUT --- 0: success , 1:len(@classname) <2 , 2: Classname already exists
as
begin
set @flag=0
declare @max int
select @max=1

	if( exists (select * from Class))
	begin
	select @max= max(classId)+1
	from Class
	end

	if(len(@classname)<2)
	begin
	set @flag=1
	return
	end

	if(exists(select * from Class where classname = @classname))
	begin
	set @flag=2
	return
	end

	insert into [Class](classId, classname, classcode,meetlink, invitelink)
	values(@max,@classname,@classcode,@meetlink,@invitelink)

end

declare @success int

exec InsertClass
@classId = '3',
@classname = 'Advanced Programming',
@classcode = '2hu2he',
@meetlink = 'https://meetwhatever',
@invitelink = 'htpps://joinwhatever',
@flag=@success OUTPUT 

select @success


select * from [Class]
--- Procedure 3: Class_Person ie enroll in class


go
create procedure Enroll
@email varchar(40),
@classId int ,
@type1 char, 
@flag int OUTPUT --- 0: success , 1:already enrolled in class, 2: accountId does not exist, 3: classId does not exist
as
begin
declare @accID int
set @flag=0

	if( exists(select * from Enrolled where classId = @classId and accountId = (select accountId from Person where email = @email))
	begin
	set @flag=1
	return
	end

	if( not exists(select * from Person where email = @email))
	begin
	set @flag=2
	return
	end

	if(not exists(select * from Class where classId = @classId))
	begin
	set @flag=3
	return
	end
	select @accID = accountId from Person where email = @email
	insert into [Enrolled](accountId,classId,[type])
	values(@accID,@classId,@type1)
end

declare @success int
exec Enroll
@accountId = '4',
@classId = '1',
@type1 = 'S',
@flag=@success OUTPUT 

select @success


select * from [Enrolled]


--- Procedure 4: Insert Post


go
create procedure InsertPost
@postId int,
@accountId int,
@classId int,
@created datetime,
@content varchar(200),
@topic varchar(30),
@typeofpost char,
@flag int OUTPUT --- 0: success ,1: person not enrolled in class,  2 :assignment/resource by a student(can only create of N type) , 
as
begin
set @flag=0
declare @max int
select @max=1

	if( exists (select postId from Post))
	begin
	select @max= max(postId)+1 from Post
	end

	if(not exists(select * from Enrolled where classId=@classId and accountId=@accountId))
	begin
	set @flag=1
	return
	end

	if(@typeofpost = 'A' or @typeofpost='R')
	begin

	if (not exists(select * from Enrolled where classId=@classId and accountId=@accountId and [type]='T'))
		begin
		set @flag=2
		return
		end
	end
	
	insert into [Post](postId,accountId,classId,created,content,topic,[type])
	values(@max, @accountId,@classId, current_timestamp,@content,@topic,@typeofpost)
end

declare @success int
exec InsertPost
@postId = '3',
@accountId = '4',
@classId ='1',
@created = '',
@content = 'hello teacher!!!',
@topic ='Welcome',
@typeofpost='N',
@flag=@success OUTPUT 

select @success

select * from [Person]
select * from [Class]
select * from [Assignment]
select * from [Post]
select * from [Enrolled]


go
create procedure GetPersonProfile @email varchar(40)
as
begin
	select accountId, Person.name, email, dob, gender, profilepicture, bio from Person where email = @email
end

exec GetPersonProfile @email = 'feza22@gmail.com';




go
create procedure GetPersonCredentials @email varchar(40)
as
begin
	select email, password from Person where email = @email
end

exec GetPersonCredentials @email = 'feza22@gmail.com';
go
create procedure GetClassPosts @classId int
as
begin
	select * from Post where classId = @classId
end


exec GetClassPosts @classId = 1;

go
create procedure GetEnrolled @classId int
as
begin
	select name from Person where accountId in (select accountId from Enrolled where classId = @classId and type = 'S')
end

exec GetEnrolled @classId = 1;

go
create procedure GetClassTeachers @classId int
as
begin
	select name from Person where accountId in (select accountId from Enrolled where classId = @classId and type = 'T')
end


go
create procedure isTeacher @classId int, @email varchar(40), @enrollment int output --- 0 = teacher, 1 = student, 2 = not enrolled
as
begin
declare @et char(1)
	select @et = Enrolled.type from Enrolled where classId = @classId and accountId = (select accountId from Person where email = @email)
	if @et = 'T'
		begin
		set @enrollment = 0
		return
		end
	else if @et = 'S'
		begin
		set @enrollment = 1
		return
		end
	else
		begin
		set @enrollment = 2
		return
		end
end
go
create procedure GetClassAssignments @classId int
as
begin
	select A.postId, A.deadline, A.marks, A.attachment, P.created, P.content
	from Assignment as A INNER JOIN Post as P on A.postId = P.postId where classId = @classId
end

exec GetClassAssignments @classId = 1;
select * from Post
go
create procedure GetStudentClasses @email varchar(40)
as
begin
	Select *
	from Class
	where classId in (select classId
					from Enrolled
					where accountId = (select accountId from Person where email = @email ))
end

exec GetStudentClasses @email = 'muj@gmail.com';
select * from Enrolled
select * from Person

go 
create procedure GetClassCode @classId int
as
begin
	select classcode from Class where classId = @classId
end
exec GetClassCode @classId = 1;
go
create procedure InsertMarks @accountId int, @postId int, @marks int
as
begin
	UPDATE Mark
	SET obtainedmarks = @marks
	WHERE postId = @postId and studentId = @accountId
end
go
create procedure GetStudentMarks @accountId int, @postId int
as
begin
	select obtainedmarks from Mark where studentId = @accountId and postId = @postId
end

go
create procedure GetClassResources	@classId int
as
begin
	select * from Resource where postId in (select postId from Post where classId = @classId)
end


go
create procedure InsertAssignment @accountId int, @classId int, @content varchar(200), @topic varchar(30), @type char(1), @deadline datetime, @marks int, @attachment varchar(50)
as
begin
declare @max int
select @max=1

	if( exists (select postId from Post))
	begin
	select @max= max(postId)+1 from Post
	end

	insert into [Post](postId,accountId,classId,created,content,topic,[type])
	values(@max, @accountId,@classId, current_timestamp,@content,@topic,@type)

	insert into [Assignment](postId,deadline,marks,attachment)
	values(@max, @deadline,@marks, @attachment)
end
go
create procedure InsertResource @accountId int, @classId int, @content varchar(200), @topic varchar(30), @type char(1), @attachment varchar(50)
as
begin
declare @max int
select @max=1

	if( exists (select postId from Post))
	begin
	select @max= max(postId)+1 from Post
	end

	insert into [Post](postId,accountId,classId,created,content,topic,[type])
	values(@max, @accountId,@classId, current_timestamp,@content,@topic,@type)

	insert into [Resource](postId,attachment)
	values(@max, @attachment)
end
go
create procedure SubmitAssignment @accountId int, @postId int, @document varchar(200)
as
begin
	insert into [Submission](accountId, postId, document, submissiontime)
	values(@accountId, @postId, @document, CURRENT_TIMESTAMP)
end
go
create procedure GetSubmissions @postId int
as
begin
	select * from Submission where postId = @postId
end

go
create procedure InsertComment @postId int, @accountId int, @content varchar(50), @time datetime
as
begin
declare @max int
select @max=1

	if( exists (select commentId from Comments))
	begin
	select @max= max(commentId)+1 from Comments
	end

	insert into [Comments](postId, accountId, commentId, content, [time])
	values(@accountId, @postId, @max, @content, @time)
end
go
create procedure GetPostComments @postId int
as
begin
	select * from Comments where postId = @postId
end

go
create procedure GetNoDueDateAssignments @email varchar(40), @classId int
as
begin
	declare @accountId int
	select @accountId = accountId from Person where email = @email
	select * from Assignment where deadline IS NULL and postId in (select postId from Post where classId = @classId) and postId not in (select postId from Submission where accountId = @accountId)
end
go
create procedure GetThisWeekAssignments @email varchar(40), @classId int
as
begin
	declare @accountId int
	select @accountId = accountId from Person where email = @email
	select *
	from Assignment
	where postId in (select postId from Post where classId = @classId) and DATEDIFF(Day, CURRENT_TIMESTAMP, deadline) between 0 and 7 and postId not in (select postId from Submission where accountId = @accountId)

end

go
create procedure GetNextWeekAssignments @email varchar(40), @classId int
as
begin
	declare @accountId int
	select @accountId = accountId from Person where email = @email
	select *
	from Assignment
	where postId in (select postId from Post where classId = @classId) and DATEDIFF(Day, CURRENT_TIMESTAMP, deadline) between 8 and 14 and postId not in (select postId from Submission where accountId = @accountId)

end

go
create procedure GetLaterAssignments @email varchar(40), @classId int
as
begin
	declare @accountId int
	select @accountId = accountId from Person where email = @email
	select *
	from Assignment
	where postId in (select postId from Post where classId = @classId) and DATEDIFF(Day, CURRENT_TIMESTAMP, deadline) >14 and postId not in (select postId from Submission where accountId = @accountId)
end


go
create procedure GetMissingAssignments @email varchar(40), @classId int
as
begin
	declare @accountId int
	select @accountId = accountId from Person where email = @email
	select *
	from Assignment
	where postId in (select postId from Post where classId = @classId) and DATEDIFF(Day, CURRENT_TIMESTAMP, deadline) < 0 and postId not in (select postId from Submission where accountId = @accountId)
end

go
create procedure GetDoneAssignments @email varchar(40), @classId int
as
begin
	declare @accountId int
	select @accountId = accountId from Person where email = @email
	select *
	from Assignment
	where postId in (select postId from Post where classId = @classId) and postId in (select postId from Submission where accountId = @accountId)
end
