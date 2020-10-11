import dash
import dash_core_components as dcc
import dash_html_components as html
# import matplotlib.pyplot as plt
from datetime import datetime
from datetime import date
from dash.dependencies import Input,Output
import numpy as np
import pandas as pd
import csv
import json
import requests
r = requests.get('https://limitless-cove-02705.herokuapp.com/patients')
data_r = r.json()
data = json.dumps(data_r)
data = json.loads(data)
date = []
age = []
gender =[]
state = []
for i in data:
     age.append(i['ageEstimate'])
     date.append(i['reportedOn'])
     # date.append(datetime.strptime(i['reportedOn'], '%d-%m-%Y'))
     gender.append(i['gender'])
     state.append(i['state'])
age_range = ['0-9','10-19','20-29','30-39','40-49','50-59','60-69','70 and above']

app = dash.Dash()
server = app.server
app.layout = html.Div(children=[
    html.Div(children=
    'CovidPlot : An interactive Graphical representation of the Covid19 Stats',style={
        'textAlign': 'center',
        'fontSize' : 25,
        'backgroundColor':'#119dff',
        'Color':"#ffffff"
        }  ),
    html.Br(),
    html.Div([
        dcc.Dropdown(
            id='state_in',
            options=[{'label': i, 'value': i} for i in np.unique(state)],
            placeholder="Native State",
            optionHeight= 20,
        ),],
    style={'width': '25%', 'display': 'inline-block',"margin-left": "5px"}),
    html.Div([
        dcc.Dropdown(
            id='gender_in',
            options=[{'label': i, 'value': i} for i in np.unique(gender)],
            placeholder="Gender",
            optionHeight= 20,
        ),],
    style={'width': '15%', 'display': 'inline-block',"margin-left": "10px"}),
    html.Div([
        dcc.Dropdown(
            id='age_in',
            options=[{'label': i, 'value': i} for i in age_range],
            placeholder="Age",
            optionHeight= 20,
        ),],
    style={'width': '15%', 'display': 'inline-block',"margin-left": "10px"}),

    html.Br(),

    html.Div(id = 'output-graph')
    ])
@app.callback(
    Output(component_id='output-graph', component_property='children'),
    [Input(component_id = 'state_in', component_property = 'value'),Input(component_id='gender_in',component_property='value'),Input(component_id='age_in',component_property='value')]
)
def build_graph(input_st,input_gender,input_age):
    st = input_st
    if(input_age=='0-9'):
        age_l, age_u = 1, 9
    elif(input_age=='10-19'):
        age_l, age_u = 10, 19
    elif(input_age=='20-29'):
        age_l, age_u = 20, 29
    elif(input_age=='30-39'):
        age_l, age_u = 30, 39
    elif(input_age=='40-49'):
        age_l, age_u = 40, 49
    elif(input_age=='50-59'):
        age_l, age_u = 50, 59
    elif(input_age=='60-69'):
        age_l, age_u = 60, 69
    elif(input_age == '70 and above'):
        age_l, age_u = 70, 150
    else:
        age_l,age_u = 1, 150
    gen = input_gender
    d = []
    for i in range(0,len(age)):
        if age[i] >= age_l and age[i] <= age_u and gender[i] == gen and state[i] == st:
            d . append(date[i])
    d_set  = np.unique(d)
    # d_set = [d_set.sort(key = lambda date: datetime.strptime(date, '%d-%m-%Y'))]
    d_set_count = []
    for flag in d_set:
        flag_count = d.count(flag)
        d_set_count.append(flag_count)
    return dcc.Graph(
        id='Graph',
        figure={
            'data': [
                {'x': d_set, 'y': d_set_count, 'type': 'line', 'name': 'Covid19'},
            ],
            'layout': {
                'title': 'Covid19 Visualization',
            }   }    )
if __name__ == '__main__':
    app.run_server(debug = True)
