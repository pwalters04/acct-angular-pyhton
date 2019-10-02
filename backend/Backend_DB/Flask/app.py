from flask import Flask, request, jsonify, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_pymongo import PyMongo


import os

#init App
app = Flask (__name__)

basedir=os.path.abspath(os.path.dirname(__file__))

#Database Config
# app.config['SQLALCHEMY_DATABASE_URI'] ='mysql://admin:AppDomain!@accountantdb.cecg8fpgzvzf.us-east-1.rds.amazonaws.com/accountantdb'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['MONGO_URI'] ='mongodb+srv://admin:AppDomain!@accountantcluster-5wjlu.mongodb.net/test?retryWrites=true&w=majority'

#Init DB
# db = SQLAlchemy(app)
mongo =PyMongo(app)

#Init MA
ma = Marshmallow(app)

# Collections
blue =Blueprint('blue', __name__)
app.register_blueprint(blue)

@blue.route('/')
def index():
    user_collection = mongo.db.users
    user_collection.insert({'first_name':'Anna'})
    return '<h1> Add A User </h1>'


#server
if __name__ == '__main__':
    app.run(debug = True)