def log_activity(activity):

    with open("logs.txt", "a") as f:
        f.write(activity + "\n")