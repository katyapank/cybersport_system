import requests
import json
bagcheck = True


def auth_signin(login, password):
    url = "http://10.10.10.246:8081/api/team/bot/login"
    payload = {'teamLogin': str(login), 'teamPassword': str(password)}
    #payload = json.dumps(payload)
    print(payload)
    #headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

    response = requests.request("POST", url, data=payload)
    #response = requests.post(url, data=json.dumps(payload), headers=headers)
    if bagcheck:
        print(response.text)

    return response


def get_all():
    url = "http://10.10.10.246:8081/api/tournament"

    response = requests.request("GET", url)
    if bagcheck:
        print(response.text)

    return response


def get_all_matches():
    url = "http://10.10.10.246:8081/api/match"

    response = requests.request("GET", url)
    if bagcheck:
        print(response.text)

    return response


def get_all_teams():
    url = "http://10.10.10.246:8081/api/team"

    response = requests.request("GET", url)
    if bagcheck:
        print(response.text)
    return response


def get_team_by_name(name):
    url = f'http://10.10.10.246:8081/api/team/searchByName/{name}'

    response = requests.request("GET", url)
    if bagcheck:
        print(response.text)

    return response


def get_profile(token):
    url = f'http://10.10.10.246:8081/api/team/{token}'
    response = requests.get(url)
    if bagcheck:
        print(response.text)

    return response