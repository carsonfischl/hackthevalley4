@app.route("/")
def main():
    online_users = mongo.db.users.find({"online": True})
    return render_template("/templates/index.html",
        online_users=online_users)