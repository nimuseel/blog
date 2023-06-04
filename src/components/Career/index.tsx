import { Button, Card, Grid, Row } from '@nextui-org/react';
import Link from 'next/link';
import { careerList } from './data';
import Image from 'next/image';

export const Career = () => {
  return (
    <>
      <Grid.Container gap={2} justify="center">
        {careerList.map((item) => (
          <Grid xs key={item.companyName}>
            <Card variant="bordered" css={{ padding: '20px' }}>
              <Card.Header style={{ padding: '12px 0' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '48px',
                      }}
                    >
                      <Image
                        src={
                          item.companyName === '레몬베이스'
                            ? '/assets/images/lemonbase.png'
                            : '/assets/images/zent.jpeg'
                        }
                        alt="company_logo"
                        style={{ borderRadius: '8px' }}
                        width={48}
                        height={48}
                      />
                    </div>
                    <div>
                      <p style={{ margin: 0 }}>
                        <b>{item.companyName}</b>
                      </p>
                      <span>
                        {item.position} <br /> {item.period}
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Header>
              <Card.Body style={{ padding: '12px 0' }}>
                {item.companyDescription}
              </Card.Body>
              <Card.Footer>
                <Row justify="flex-end" align="center">
                  <Link
                    href={`/career/${item.companySlug}`}
                    passHref
                    style={{ textDecoration: 'none' }}
                  >
                    <Button flat auto>
                      자세히 보기
                    </Button>
                  </Link>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};
