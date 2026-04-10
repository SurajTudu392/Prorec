from fastapi import FastAPI
from pydantic import BaseModel
from supabase_client import supabase
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer


app = FastAPI()

class AuthRequest(BaseModel):
    email: str
    password: str

@app.post("/signup")
def signup(data: AuthRequest):
    res = supabase.auth.sign_up({
        "email": data.email,
        "password": data.password
    })
    return res


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/login")
def login(data: AuthRequest):
    res = supabase.auth.sign_in_with_password({
        "email": data.email,
        "password": data.password
    })
    return res

#====================== JWT =====================
security = HTTPBearer()

def get_current_user(token=Depends(security)):
    try:
        user = supabase.auth.get_user(token.credentials)
        return user
    except:
        raise HTTPException(status_code=401, detail="Invalid token")

@app.get("/profile")
def profile(user=Depends(get_current_user)):
    return {"user": user}