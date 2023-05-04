window.addEventListener('DOMContentLoaded',(event) => {
    const name = document.querySelector('#name');
    const startdate = document.querySelector('#startdate');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length == 0){
            textError.textContent="";
            return;
        }
        try{
            (new EmployeeData()).name=name.value;;
            textError.textContent="";
        }
        catch (e){
            textError.textContent=e;
        }
    });
    const salary=document.querySelector('#salary');
    const output=document.querySelector('.salary-output');
    output.textContent=salary.value;
    salary.addEventListener('input',function(){
        output.textContent=salary.value;
    
    });
    startdate.addEventListener('input',function(){
        
        try{
            (new EmployeeData()).startdate=startdate.value;;
            textError.textContent="";
        }
        catch (e){
            textError.textContent=e;
        }
    });
    });
    const save=()=>{
        try{
            let employeeData = createEmployeePayroll();
            createAndUpdateStorage(employeeData);
        }
        catch(e)
        {
            return e;
        }
    }
    const createEmployeePayroll = () =>{
        let employeeData = new EmployeeData();
        try{
            employeeData.name = getInputValueById('#name');
        }
        catch(e){
            setTextValue('.text-error',e)
            throw e;
        }
        employeeData.profilePic = getSelectedValues('[name=profile]').pop();
        employeeData.gender = getSelectedValues('[name=gender]').pop();
        employeeData.department = getSelectedValues('[name=department]');
        employeeData.salary=getInputValueById('#salary');
        employeeData.note=getInputValueById('#note');
        let date =getInputValueById('#day')+" "+getInputValueById('#month')+" "+getInputValueById('#year');
        employeeData.startdate =Date.parse(date);
        alert(employeeData.tostring());
        return employeeData;
    
    }
    const getSelectedValues =(propertyValue)=>{
        let allItems = document.querySelector(propertyValue);
        let selItems=[];
        allItems.forEach(item => {
            if(item.checked) selItems.push(item.value);
        });
        return selItems;
    }
    const getInputValueById =(id) =>{
        let value = document.querySelector(id).value;
        return value;
    }