# streamlit-poc   
Testing out streamlit

# How to run
git clone git@github.com:iAmNawa/streamlit-poc.git  
In the same directory as setup.py:    
$ conda create -n streamlit-custom python=3.8  # Create a new python venv   
$ conda activate streamlit-custom              # Activate the venv    
$ pip install streamlit                        # Install Streamlit    
$ pip install -e .                             # Install package in editable mode   

Then:      
cd streamlit-poc/my_component/frontend    
npm i  
npm start   
cd ..   
streamlit run __init__.py   

# todo    
understand python/javascript communication
