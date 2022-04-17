import os
# import pandas as pd
from datetime import date, timedelta
import json
from requests_html import HTMLSession
from dotenv import load_dotenv
load_dotenv()
api_key = os.getenv("API_KEY")

scrape_team_ids = []

for i in range(0, 20):
    scrape_team_ids.append(150+i)

for i in range(len(scrape_team_ids)):
    session = HTMLSession()
    url = "https://mlb-data.p.rapidapi.com/json/named.roster_team_alltime.bam"
    querystring = {"end_season":"'2022'","team_id":f"'{str(scrape_team_ids[i])}'","start_season":"'2020'","all_star_sw":"'N'","sort_order":"name_asc"}
    headers = {
        "X-RapidAPI-Host": "mlb-data.p.rapidapi.com",
        "X-RapidAPI-Key": f"{api_key}"
    }
    response = session.get(url, headers=headers, params=querystring)
    data = json.loads(response.text)


    if int(data['roster_team_alltime']['queryResults']['totalSize'])>=1:
        saveData = data['roster_team_alltime']['queryResults']
        file_name = f"{querystring['start_season']}_{querystring['end_season']}_{str(scrape_team_ids[i])}"
        with open(f'./scraped_api_rosters/{file_name}.json', 'w') as f:
            json.dump(data, f)
    else:
        print(f'this is team_id [{i}]')
        continue




# querystring = {"league_list_id":"'mlb'","game_type":"'R'","season":"'2021'","player_id":"'493316'"}
# url = "https://mlb-data.p.rapidapi.com/json/named.sport_hitting_tm.bam"
# url = 'https://mlb-data.p.rapidapi.com/json/named.player_teams.bam'

# years = ['2013', '2014', '2015', '2016']
# ids = ['405395', '493316','408234']

# for j in range(len(ids)):
#     for i in range(len(years)):
#         # querystring = {"player_id":"'668731'","season":f"'{years[i]}'"}
#         querystring = {"league_list_id":"'mlb'","game_type":"'R'","season":f"'{years[i]}'","player_id":f"'{ids[j]}'"}
#         url = "https://mlb-data.p.rapidapi.com/json/named.sport_hitting_tm.bam"
#         response = session.get(url, headers=headers, params=querystring)
#         data = json.loads(response.text)
#         # if int(data['player_teams']['queryResults']['totalSize'])>1:
#         #     for i in range(int(data['player_teams']['queryResults']['totalSize'])):
#         #         print(data['player_teams']['queryResults']['row'][i])
#         # else:
#         if int(data['sport_hitting_tm']['queryResults']['totalSize'])>=2:
#             for i in range(int(data['sport_hitting_tm']['queryResults']['totalSize'])):
#                 print(data['sport_hitting_tm']['queryResults']['row'][i])
#             continue
#         if int(data['sport_hitting_tm']['queryResults']['totalSize'])>=1:
#             print(data['sport_hitting_tm']['queryResults']['row'])
            
#         else:
#             print(f'DNP in {years[i]}')





# response = session.get("https://www.fangraphs.com/players/owen-miller/24655/stats?position=1B/2B")

# for i in range(len(response.html.find('.row-mlb-season'))):
#     print(response.html.find('.row-mlb-season')[i].text)