import requests

# Replace with your Infermedica API credentials and endpoint
api_url = "https://api.infermedica.com/v3"
api_key = "YOUR_API_KEY"

# Example API endpoint (replace with the specific endpoint you want to access)
endpoint = "/diagnosis"

# Set up the headers including your API key
headers = {
    "Content-Type": "application/json",
    "App-Id": api_key,
    "App-Key": api_key
}

# Define the parameters for your GET request
params = {
    "sex": "male",
    "age": 30,
    "evidence": []
}

# Make the GET request
response = requests.get(api_url + endpoint, headers=headers, params=params)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print(f"Error: {response.status_code} - {response.text}")
