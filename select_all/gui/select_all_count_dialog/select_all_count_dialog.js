function init(){}

function select_all_count_selects()
{
    Engine.GetGUIObjectByName("select_all_count_dialog").hidden = true
    let size = Number(Engine.GetGUIObjectByName("select_all_count_label").caption)
    let selection = g_Selection.toList()
    let out = [];
    let idle_flg = Engine.GetGUIObjectByName("idle_chk").checked;
    let food_flg = Engine.GetGUIObjectByName("food_chk").checked;
    let wood_flg = Engine.GetGUIObjectByName("wood_chk").checked;
    let stone_flg = Engine.GetGUIObjectByName("stone_chk").checked;
    let metal_flg = Engine.GetGUIObjectByName("metal_chk").checked;

    if (idle_flg || food_flg || wood_flg || stone_flg || metal_flg) {
        if (idle_flg) out.push(...idle(selection));  
        if (food_flg) out.push(...gatherers(selection, "food"));  
        if (wood_flg) out.push(...gatherers(selection, "wood"));  
        if (stone_flg) out.push(...gatherers(selection, "stone"));  
        if (metal_flg) out.push(...gatherers(selection, "metal"));  
    }
    else {
        out = selection;
    }
    if (!Engine.GetGUIObjectByName("all_chk").checked) {
        size = Math.min(size, out.length);
        out = out.slice(0, size);
    }
    g_Selection.reset();
    g_Selection.addList(out);
}
function select_all_count_change(value)
{
    let obj = Engine.GetGUIObjectByName("select_all_count_label")
    obj.caption = Number(obj.caption)+value
}