@echo off

start cmd /k "cd C:\Users\caste\Desktop\Isishare\isishare\api && npm start"

start cmd /k "cd C:\Users\caste\Desktop\Isishare\isishare\api && ngrok http --domain=slug-ruling-noticeably.ngrok-free.app 3001"

exit