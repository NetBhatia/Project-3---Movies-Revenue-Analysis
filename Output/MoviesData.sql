DROP TABLE RevperGenre;
DROP TABLE MoviesInfo;
DROP TABLE RatingperGenre;
DROP TABLE VotecountperGenre;
DROP TABLE Votecountwithrating;

-- Create new table
CREATE TABLE MoviesInfo (
	Title VARCHAR,
	Release_Date DATE,
	Genres VARCHAR,
	Ratings DEC,
	VoteCount INT,
	Revenue BIGINT
);

-- Create new table
CREATE TABLE RatingperGenre (
	Genres VARCHAR,
	Ratings DEC
);

-- Create new table
CREATE TABLE RevperGenre (
	Genres VARCHAR,
	Revenue DEC
);

-- Create new table
CREATE TABLE VotesperGenre (
	Genres VARCHAR,
	VoteCount INT
);

-- Create new table
CREATE TABLE VoteCountwithRating (
	Ratings DEC,
	VoteCount INT
);

-- View table columns and datatypes
SELECT * FROM MoviesInfo;
SELECT * FROM RevperGenre;