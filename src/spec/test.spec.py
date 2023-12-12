from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.chrome import ChromeDriverManager
import time
from webdriver_manager.firefox import GeckoDriverManager
import random

driver = webdriver.Firefox()


url = "http://localhost:3000"
driver.get(url)

try:
    print('Setup de teste')
    time.sleep(3)
    print('>> Validando criação com sucesso de nova tarefa')
    print('>> Run!')


    add_task_button = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.XPATH, "/html/body/div[2]/div/div/main/header/div[3]/button[3]"))
    )

    add_task_button.click()

    print('>> 1. Preenche titulo da tarefa')
    title_input = driver.find_element(By.XPATH, "/html/body/div[1]/div/section/form/label[1]/input")
    title_input.send_keys("Título da Tarefa")

    date_input = driver.find_element(By.XPATH, "/html/body/div[1]/div/section/form/label[2]/input")
    date_input.send_keys("2023-12-31")

    print('>> 2. Preenche descrição da tarefa')
    description_input = driver.find_element(By.XPATH, "/html/body/div[1]/div/section/form/label[3]/textarea")
    description_input.send_keys("Descrição da Tarefa")

    directory_select = driver.find_element(By.XPATH, "/html/body/div[1]/div/section/form/label[4]/select")


    print('>> 3. seleciona diretório para criação da tarefa')
    directory_select = Select(directory_select)
    directory_select.select_by_visible_text("Main")

    print('>> 4. Marcar tarefa como importante')
    important_radio = driver.find_element(By.XPATH, "/html/body/div[1]/div/section/form/label[5]")
    important_radio.click()
    
    print('>> 5. Marcar a tarefa como completada')
    completed_radio = driver.find_element(By.XPATH, "/html/body/div[1]/div/section/form/label[6]")
    completed_radio.click()

    print('>> 6. Criar tarefa')
    submit_button = driver.find_element(By.XPATH, "/html/body/div[1]/div/section/form/button")
    submit_button.click()

    created_task = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.XPATH, "/html/body/div[2]/div/div/main/section/ul/li[1]/article"))
    )

    print('-'*30)
    if created_task.text:
        print('Task criada com sucesso!: ')
        print(created_task.text)

    time.sleep(2)
    

finally:

    driver.quit()
