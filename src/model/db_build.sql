BEGIN;

DROP TABLE IF EXISTS colours CASCADE;

CREATE TABLE colours (
  id SERIAL PRIMARY KEY,
  colour_name VARCHAR NOT NULL,
  hex_name VARCHAR NOT NULL
);

INSERT INTO colours (colour_name, hex_name)
VALUES
    ('Brilliant Blue', '0000ff'),
    ('Blacky Black', '000000');

COMMIT;