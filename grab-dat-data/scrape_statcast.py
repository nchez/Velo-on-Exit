import json
import os
# import pandas as pd
from datetime import date, timedelta
from requests_html import HTMLSession

def date_array(start_date, num_of_days):
    dates = []
    # 2022-04-07 YYYY-MM-DD
    d_start = date(int(start_date[0:4]), int(start_date[5:7]), int(start_date[8:]))
    for i in range(num_of_days):
        dates.append(d_start+timedelta(days=i))
    return dates
scrape_dates = date_array('2021-08-30', 35)

def change_to_military_time(strng):
    # 9:45PM -> 21:45, 12:00AM -> 00:00, 
    
    if (len(strng) <= 6):
        strng= "0" + strng
    if (int(strng[:2])< 12 and strng[-2:] == "pm"):
        strng = str(int(strng[:2])+12)+ strng[3:5]
    elif (int(strng[:2])==12 and strng[-2:] == "am"):
        strng = "00" + strng[3:5]
    else:
        strng = strng[:2]+strng[3:5]

    return(strng)

session = HTMLSession()
with open('../velo-on-exit-server/4142022uniqueplayers.json') as json_file:
    players = json.load(json_file)

# players = [{'name': 'matt-olson', 'mlb_id': '621566'}, {'name': 'luis-robert', 'mlb_id': '673357'}, {'name': 'mookie-betts', 'mlb_id': '605141'}, {'name': 'akil-baddoo', 'mlb_id': '668731'}]
todays_date = str(date.today()).replace("-", "")
for k in range(len(players)):
    file_name = f'{todays_date}-{players[k]["name"]}-{players[k]["mlb_id"]}'
    r = session.get(f'https://baseballsavant.mlb.com/savant-player/{players[k]["name"]}-{players[k]["mlb_id"]}?stats=gamelogs-r-hitting-statcast&season=2022')
    r.html.render(timeout = 20, sleep=1)
    statcast_headers = []
    statcast_log_div = r.html.find('#gamelogs_statcast', first=True)
    statcast_table_headers = statcast_log_div.find('.th-component-header')
    for i in range(len(statcast_table_headers)-1):
        if i == 1 or i == 2:
            statcast_headers.append('blank')
            continue
        statcast_headers.append(statcast_table_headers[i].text)
    statcast_headers.append('Video Link')
    player_statcast_log = dict.fromkeys(statcast_headers)
    statcast_table_rows = statcast_log_div.find('.default-table-row')
    player_statcast_array = []
    # print(len(statcast_table_rows[0].find('.tr-data')))
    for i in range(len(statcast_table_rows)):
        for j in range(len(statcast_table_rows[i].find('.tr-data'))-1):
            if j == 1 or j ==2:
                continue
            if statcast_table_rows[i].find('.tr-data')[j].text == "":
                player_statcast_log[statcast_headers[j]] = ""
                continue
            player_statcast_log[statcast_headers[j]] = statcast_table_rows[i].find('.tr-data')[j].text
        filtered_log = {k: v for k,v in player_statcast_log.items() if v is not None}
        filtered_log['mlb_id'] = players[k]['mlb_id']
        player_statcast_array.append(filtered_log)
    with open(f'./scraped_statcast_data/{file_name}.json', 'w') as f:
        json.dump(player_statcast_array, f)