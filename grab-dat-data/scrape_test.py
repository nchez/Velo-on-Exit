import json
import os
from requests_html import HTMLSession
# scrape_date = '2022-04-07'
scrape_dates = ['2022-04-07', '2022-04-08', '2022-04-09', '2022-04-10', '2022-04-11', '2022-04-12']
# session = HTMLSession()
# r = session.get(f'https://www.baseballpress.com/lineups/{scrape_date}')
# date = r.html.find('.date-item', first=True).attrs['data-val']
# ## Make directory to store daily game lineup json files 
# os.mkdir(f'./scraped_data/{date.replace("/", "")}')
# daily_directory_path = f'./scraped_data/{date.replace("/", "")}'
# lineup_cards = r.html.find('.lineup-card')


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

for i in range(len(scrape_dates)):
    session = HTMLSession()
    r = session.get(f'https://www.baseballpress.com/lineups/{scrape_dates[i]}')
    date = r.html.find('.date-item', first=True).attrs['data-val']
    os.mkdir(f'./scraped_data/{date.replace("/", "")}')
    daily_directory_path = f'./scraped_data/{date.replace("/", "")}'
    lineup_cards = r.html.find('.lineup-card')
    for i in range(len(lineup_cards)):
        game_obj = {'away_team': None, 'date': None, 'time': None, 'home_team': None, 'away_sp': None, 'away_sp_h': None, 'home_sp': None, 'home_sp_h': None, 'away_lineup': [], 'home_lineup': []}
        game_info = lineup_cards[i].find('.lineup-card-header', first=True)
        # do not include PPD (postponed) games, continue to next iteration of loop if PPD found in game header
        if "PPD" in game_info.text:
            continue
        # split game info text into array so game data is separated and can be stored in object
        game_info_arr = game_info.text.split("\n")
        # find and replace shortened names (mobile vs desktop) then replace them in the array
        corrected_sp_names = []
        for j in game_info.find('.player'):
            search_player_names = j
            if j.find('.desktop-name',first=True):
                corrected_sp_names.append(j.find('.desktop-name', first=True).text)
            else:
                corrected_sp_names.append('')
        for k in range(len(corrected_sp_names)):
            if corrected_sp_names[k] == "":
                continue;
            elif corrected_sp_names[k] != "":
                game_info_arr[k-2] = corrected_sp_names[k] + " " + game_info_arr[k-2][-3:]

        # populate game object with values from game_info_array
        away_handedness_index = game_info_arr[4].index('(')
        home_handedness_index = game_info_arr[5].index('(')
        game_obj['away_team'] = game_info_arr[0]
        game_obj['date'] = date
        game_obj['time'] = change_to_military_time(game_info_arr[2])
        game_obj['home_team'] = game_info_arr[3]
        game_obj['away_sp'] = game_info_arr[4][:away_handedness_index-1]
        game_obj['away_sp_h'] = game_info_arr[4][away_handedness_index+1:-1]
        game_obj['home_sp'] = game_info_arr[5][:home_handedness_index-1]
        game_obj['home_sp_h'] = game_info_arr[5][home_handedness_index+1:-1]

        # print(game_obj)
        players = lineup_cards[i].find('.player')
        for l in range(2, len(players) - 9):
            away_player_obj = {}
            if players[l].find('.desktop-name'):
                actual_name = players[l].find('.desktop-name', first=True)
                # find ids from anchor tag
                away_player_obj['player_name'] = actual_name.text
                away_player_obj['b_ref_id'] = players[l].find('a', first=True).attrs['data-bref']
                away_player_obj['mlb_id'] = players[l].find('a', first=True).attrs['data-mlb']
                away_player_obj['position'] = players[l].text[players[l].text.index(')')+2:]
                away_player_obj['bat'] = players[l].text[players[l].text.index('(')+1:players[l].text.index('(')+2]
                away_player_obj['spot'] = int(players[l].text[:1])
                away_player_obj['opp_sp_h'] = game_obj['home_sp_h']
                away_player_obj['date'] = date
                game_obj['away_lineup'].append(away_player_obj)
                continue
            away_player_obj['player_name'] = players[l].text[3:players[l].text.index('(')-1]
            away_player_obj['b_ref_id'] = players[l].find('a', first=True).attrs['data-bref']
            away_player_obj['mlb_id'] = players[l].find('a', first=True).attrs['data-mlb']
            away_player_obj['position'] = players[l].text[players[l].text.index(')')+2:]
            away_player_obj['bat'] = players[l].text[players[l].text.index('(')+1:players[l].text.index('(')+2]
            away_player_obj['spot'] = int(players[l].text[:1])
            away_player_obj['opp_sp_h'] = game_obj['home_sp_h']
            away_player_obj['date'] = date
            game_obj['away_lineup'].append(away_player_obj)
        for l in range(len(players) - 9, len(players)):
            home_player_obj = {}
            if players[l].find('.desktop-name'):
                actual_name = players[l].find('.desktop-name', first=True)
                home_player_obj['player_name'] = actual_name.text
                home_player_obj['b_ref_id'] = players[l].find('a', first=True).attrs['data-bref']
                home_player_obj['mlb_id'] = players[l].find('a', first=True).attrs['data-mlb']
                home_player_obj['position'] = players[l].text[players[l].text.index(')')+2:]
                home_player_obj['bat'] = players[l].text[players[l].text.index('(')+1:players[l].text.index('(')+2]
                home_player_obj['spot'] = int(players[l].text[:1])
                home_player_obj['opp_sp_h'] = game_obj['away_sp_h']
                home_player_obj['date'] = date
                game_obj['home_lineup'].append(home_player_obj)
                continue
            home_player_obj['player_name'] = players[l].text[3:players[l].text.index('(')-1]
            home_player_obj['b_ref_id'] = players[l].find('a', first=True).attrs['data-bref']
            home_player_obj['mlb_id'] = players[l].find('a', first=True).attrs['data-mlb']
            home_player_obj['position'] = players[l].text[players[l].text.index(')')+2:]
            home_player_obj['bat'] = players[l].text[players[l].text.index('(')+1:players[l].text.index('(')+2]
            home_player_obj['spot'] = int(players[l].text[:1])
            home_player_obj['opp_sp_h'] = game_obj['away_sp_h']
            home_player_obj['date'] = date
            game_obj['home_lineup'].append(home_player_obj)
        file_name = f'{date.replace("/", "")}_{game_obj["time"]}_{game_obj["away_team"]}vs{game_obj["home_team"]}'
        with open(f'{daily_directory_path}/{file_name}.json', 'w') as f:
            json.dump(game_obj, f)