SELECT marks.mark,marks.id,models.model,models.id,generations.generation,generations.id,bodies.body,bodies.id,engines.engine_full_name,engines.id FROM engines
JOIN bodies ON bodies.id = engines.idOfBody
JOIN generations ON generations.id = bodies.idOfGeneration
JOIN models ON models.id = generations.idOfModel
JOIN marks ON marks.id = models.idOfMark
WHERE (engines.id='983') AND(bodies.id="109") AND(generations.id='835' )  AND (models.id='68') AND (marks.id='8' )

SELECT marks.mark,marks.id,models.model,models.id,generations.generation,generations.id,bodies.body,bodies.id,engines.engine_full_name,engines.id, gearboxes.gearbox, gearboxes.id FROM gearboxes
JOIN engines ON engines.id = gearboxes.idOfEngine
JOIN bodies ON bodies.id = engines.idOfBody
JOIN generations ON generations.id = bodies.idOfGeneration
JOIN models ON models.id = generations.idOfModel
JOIN marks ON marks.id = models.idOfMark
WHERE (gearboxes.id=27572) AND (engines.id='983') AND(bodies.id="109") AND(generations.id='835' )  AND (models.id='68') AND (marks.id='8' )