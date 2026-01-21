from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/abdo")
def return_abdo():
    return "hello I am abdo"














