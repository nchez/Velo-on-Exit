import json
import os
from requests_html import HTMLSession
from dotenv import load_dotenv

dir_link = './scraped_api_rosters'
directory = os.fsencode(dir_link)

load_dotenv()
api_key = os.getenv("API_KEY")

current_players_on_rosters = []
check_array = []
for file in os.listdir(directory):
    filename=os.fsdecode(file)
    with open(f'./scraped_api_rosters/{filename}') as json_file:
        data = json.load(json_file)['roster_team_alltime']['queryResults']['row']
        for i in range(len(data)):
            new_player_obj = {}
            if data[i]['player_id'] not in check_array and data[i]['position_desig'] != 'PITCHER':
                new_player_obj['name_last_first'] = data[i]['name_last_first']
                new_player_obj['team_id'] = data[i]['name_last_first']
                new_player_obj['throws'] = data[i]['throws']
                new_player_obj['bats'] = data[i]['bats']
                new_player_obj['position_desig'] = data[i]['position_desig']
                new_player_obj['primary_position_cd'] = data[i]['primary_position_cd']
                new_player_obj['player_id'] = data[i]['player_id']
                check_array.append(data[i]['player_id'])
                current_players_on_rosters.append(new_player_obj)
            else:
                continue
seasons = ['2020', '2021', '2022']

url = "https://mlb-data.p.rapidapi.com/json/named.sport_hitting_tm.bam"

headers = {
	"X-RapidAPI-Host": "mlb-data.p.rapidapi.com",
	"X-RapidAPI-Key": f"{api_key}"
}

current_player_data_array = []

for i in range(len(current_players_on_rosters)):
    session = HTMLSession()
    for j in range(len(seasons)):
        querystring = {"league_list_id":"'mlb'","game_type":"'R'","season":f"'{seasons[j]}'","player_id":f"'{current_players_on_rosters[i]['player_id']}'"}
        response = session.get(url, headers=headers, params=querystring)
        data= json.loads(response.text)['sport_hitting_tm']['queryResults']
        if int(data['totalSize'])== 0:
            continue
        if type(data['row']) == list:
            for i in range(len(data['row'])):
                current_player_stats_api = data['row'][i]
                current_player_data_array.append(current_player_stats_api)
        else:
            current_player_stats_api = data['row']
            current_player_data_array.append(current_player_stats_api)
filename = 'current_player_stats.txt'
with open(f"{filename}", 'w') as outfile:
    json.dump(current_player_data_array, outfile)
print(len(current_player_data_array))



