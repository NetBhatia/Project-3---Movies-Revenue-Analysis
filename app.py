import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template, request, redirect, url_for
from flask_cors import CORS
import psycopg2

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
CORS(app)
# Connect to the database 
conn = psycopg2.connect(database="MoviesData", user="postgres", 
                        password="postgres", host="localhost", port="5432") 
  
#################################################
# Flask Routes
#################################################
@app.route("/home")
def home():
    return render_template("index.html")
@app.route("/")
def welcome():
    
    # return render_template('index.html', data=data) 

    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/moviesinfo<br/>"
        f"/api/v1.0/ratingpergenre<br/>"
        f"/api/v1.0/revenuepergenre<br/>"
        f"/api/v1.0/votespergenre<br/>"
        f"/api/v1.0/votesandratings"
    )

@app.route("/api/v1.0/moviesinfo")
def movinfo():
    conn = psycopg2.connect(database="MoviesData", user="postgres", 
                        password="postgres", host="localhost", port="5432")
    
    cur = conn.cursor()

    cur.execute('''SELECT * FROM moviesinfo''') 
  
    # Fetch the data 
    data = cur.fetchall()
    print(type(data))
    # close the cursor and connection 
    cur.close() 
    conn.close()
    columns = ["title", "releasedate", "genre", "rating", "votes", "revenue"] 
    data = pd.DataFrame(data, columns=columns)
    return jsonify({"moviedata":data.to_json(orient='records')})

@app.route("/api/v1.0/ratingpergenre")
def ratinggenre():
    conn = psycopg2.connect(database="MoviesData", user="postgres", 
                        password="postgres", host="localhost", port="5432")
    
    cur = conn.cursor()

    cur.execute('''SELECT * FROM ratingpergenre''') 
  
    # Fetch the data 
    data = cur.fetchall()


    # close the cursor and connection 
    cur.close() 
    conn.close() 

    return jsonify(data)

@app.route("/api/v1.0/revenuepergenre")
def revenuegenre():
    conn = psycopg2.connect(database="MoviesData", user="postgres", 
                        password="postgres", host="localhost", port="5432")
    
    cur = conn.cursor()

    cur.execute('''SELECT * FROM revpergenre''') 
  
    # Fetch the data 
    data = cur.fetchall() 

    # close the cursor and connection 
    cur.close() 
    conn.close() 

    return jsonify(data)

@app.route("/api/v1.0/votespergenre")
def votesgenre():
    conn = psycopg2.connect(database="MoviesData", user="postgres", 
                        password="postgres", host="localhost", port="5432")
    
    cur = conn.cursor()

    cur.execute('''SELECT * FROM votespergenre''') 
  
    # Fetch the data 
    data = cur.fetchall() 

    # close the cursor and connection 
    cur.close() 
    conn.close() 

    return jsonify(data)

@app.route("/api/v1.0/votesandratings")
def voteratings():
    conn = psycopg2.connect(database="MoviesData", user="postgres", 
                        password="postgres", host="localhost", port="5432")
    
    cur = conn.cursor()

    cur.execute('''SELECT * FROM votecountwithrating''') 
  
    # Fetch the data 
    data = cur.fetchall() 

    # close the cursor and connection 
    cur.close() 
    conn.close() 

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
