from requests_html import HTMLSession

session = HTMLSession()
r = session.get('https://www.baseballpress.com/lineups/2022-04-11')
lineup_cards = r.html.find('.lineup-card')
# players = r.html.find('.player')
# for i in range(len(players)):
#     print(players[i].text)

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
    game_obj['date'] = game_info_arr[1]
    game_obj['time'] = game_info_arr[2]
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
            actual_name = players[l].find('.desktop-name')
            away_player_obj['player_name'] = actual_name
            away_player_obj['b_ref_id'] = None
            away_player_obj['mlb_id'] = None
            away_player_obj['position'] = players[l].text[players[l].text.index(')'):]
            away_player_obj['bat'] = players[l].text[players[l].text.index('(')+1:players[l].text.index('(')+1]
            away_player_obj['spot'] = int(players[l].text[:1])
            print(players[l].text[:2] + " " + actual_name[0].text + " " + players[l].text[players[l].text.index('('):])
            continue
        print(players[l].text)