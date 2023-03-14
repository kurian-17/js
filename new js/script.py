import requests

# url = " https://in.investing.com/search-instrument/main-search"
# header ={
#     "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"

# }
# params = {
#     "searchText":"energy"
# }

# response = requests.get(url,headers= header, params= params)
# print(response.content)


#=========================================================================

msci_url = " https://www.msci.com/zh/our-solutions/esg-investing/esg-ratings-climate-search-tool?p_p_id=esgratingsprofile&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=searchEsgRatingsProfiles&p_p_cacheability=cacheLevelPage&_esgratingsprofile_keywords=apple"

header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
}

resource = requests.get(msci_url, headers=header)
msci_data = resource.json()
data = msci_data[0]["url"]
# print(data)

msci_url_id = f"https://www.msci.com/zh/our-solutions/esg-investing/esg-ratings-climate-search-tool"

company_params = {
"p_p_id":"esgratingsprofile",
"p_p_lifecycle":2,
"p_p_state":"normal",
"p_p_mode":"view",
"p_p_resource_id":"showEsgRatingsProfile",
"p_p_cacheability":"cacheLevelPage",
"_esgratingsprofile_issuerId": data
}

msci_response = requests.get(msci_url_id, headers=header, params=company_params)

msci_script = msci_response.content
print(msci_script)





