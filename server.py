from flask_pymongo import PyMongo
from Bio import AlignIO
from Bio.Blast import NCBIWWW
from flask import Flask, request, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/index")
def home():
    return render_template("index.html")
    
@app.route("/", methods=['POST'])
def blast_search():
    query = request.form['searchSeq']
    results = NCBIWWW.qblast("blastp", "refseq_protein", query, url_base = 'https://blast.ncbi.nlm.nih.gov/Blast.cgi')
    return results
    
@app.route("/about")
def about():
    return render_template("about.html")


if (__name__)== '__main__':
    app.run(port=5000, debug=True)